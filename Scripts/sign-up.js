
let Name = document.getElementById("name")
let Email = document.getElementById("email")
let Mobile = document.getElementById("mobile-number")
let Password = document.getElementById("password")
let Confirm = document.getElementById("confirm")
let CreateAccocunt = document.getElementById("create-account")
let warning = document.getElementById("warning")

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

let Customers = JSON.parse(localStorage.getItem("user")) || [] ///all user details

CreateAccocunt.addEventListener(("click"), () => {
    let name = Name.value
    let email = Email.value
    let mobile = Mobile.value
    let password = Password.value
    let confirm = Confirm.value

    if (name != "" && email != "" && mobile != "" && password != "" && confirm != "") {
        if(password !== confirm){
            warning.textContent = "both password are not same!"
            modal.style.display = "block";
            return;
        }
        let obj = { 
            name, 
            email, 
            mobile, 
            password, 
            confirm 
        }
        for (let i = 0; i < Customers.length; i++) {
            if (Customers[i].email == email) {
                warning.textContent = "user already registered !"
                modal.style.display = "block";
                return
            }
        }
        Customers.push(obj)

        Name.innerHTML = ""
        Email.innerHTML = ""
        Mobile.innerHTML = ""
        Password.innerHTML = ""
        Confirm.innerHTML = ""

        localStorage.setItem("user", JSON.stringify(Customers))

        warning.textContent = "Signed up successfully"
        modal.style.display = "block";
        setTimeout(() => {
            window.location.href = "./sign-in.html"
        }, 2000);
    }
    else{
        warning.textContent = "Please fill all the details !"
        modal.style.display = "block";
    }
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
