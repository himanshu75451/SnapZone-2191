let Tbody = document.getElementById("elements")
    // let Wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
    let ProductData = JSON.parse(localStorage.getItem("card-data")) || [];

    let Total = document.getElementById("cartTotal");
    let discountTotal = document.getElementById("discountTotal")
    let discount = document.getElementById("discount")
    let discountApply = document.getElementById("discountApply")

    const D = new Date();

    document.getElementById("date").innerHTML = D
    function showData(data) {
        let Serial = 1
        data.forEach((element, index) => {
            // console.log(element)
            let row = document.createElement("tr")
            let Sr = document.createElement("td")
            let Name = document.createElement("td")
            let Category = document.createElement("td")
            let Quantity = document.createElement("td")
            let Price = document.createElement("td")

            Sr.innerText = Serial
            Name.innerText = element.title
            Category.innerText = element.gender
            Quantity.innerText = element.quantity;
            Price.innerText = Number(element.price) * Number(element.quantity)

            row.append(Sr, Name, Category, Quantity, Price)
            Tbody.append(row)
            Serial++
        })
    }
    showData(ProductData)

    let sum = 0;
    for (let i = 0; i < ProductData.length; i++) {
        sum = sum + (+ProductData[i].price * ProductData[i].quantity)
        // sum += (+ProductData[i].price) * (ProductData[i].quantity)
        // console.log(typeof (+ProductData[i].price * ProductData[i].quantity))
    }
    Total.innerText = sum + " Rs."
    if (sum > 10000) {
        discountTotal.innerText = (Math.floor(sum * 0.80)) + " Rs."
        Total.innerText = sum + " Rs."
        discountApply.innerText = "20 % discount has been applied"
    }

    let Final = document.createElement("tr")
    let first = document.createElement("td")
    let total = document.createElement("td")
    let gender = document.createElement("td")
    let quantity = document.createElement("td")
    let price = document.createElement("td")

    first.innerText = ""
    total.innerText = "Total"
    gender.innerText = "-"
    price.innerText = Total.innerText

    Final.append(first, total, gender, quantity, price)
    Tbody.append(Final)