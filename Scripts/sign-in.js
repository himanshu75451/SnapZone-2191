let username = document.getElementById("email-number")
let password = document.getElementById("password")
let signBtn = document.getElementById("login")

let user = JSON.parse(localStorage.getItem("user")) || []

let warning = document.getElementById("warning")
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

signBtn.addEventListener("click", () => {
    // console.log(user)
    if(username.value == "admin" && password.value == "admin"){
        warning.textContent = "Admin login successfully"
        modal.style.display = "block";
        window.location.href = "./admin.html"
    }
    else{
        let flag = false;
        for (let i = 0; i < user.length; i++) {
            if ((username.value == user[i].email || username.value == user[i].mobile) && password.value == user[i].password) {
                console.log(username.value, password.value)
                flag = true
                break
            }
        }
        if(flag == true){
            warning.textContent = "Login successfully";
            localStorage.setItem("loggedIn", JSON.parse(true))
            modal.style.display = "block";
            setTimeout(() => {
                window.location.href = "./cart.html"
            }, 2000)
        }
        else if(flag == false){
            warning.textContent = "Make sure you have an account!"
            document.getElementById("register").href = "./sign-up.html";
            modal.style.display = "block";
        }
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