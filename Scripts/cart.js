let ProductData = JSON.parse(localStorage.getItem("card-data")) || [];
let cartcontainer=document.getElementById("cart-container");

function displayData(data){
    cartcontainer.innerHTML=null;

    data.forEach((element,index) => {
        let product=document.createElement("div")
        product.style.width = "80%"
        product.style.display = "flex";
        product.style.justifyContent = "space-between"
        product.style.margin = "auto"
        product.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        product.style.alignItems = "center"
        product.style.padding = "15px"
        product.style.marginBottom = "30px"

        let div1=document.createElement("div")
        div1.style.width = "20%"
        div1.style.display = "flex"
    
        let image=document.createElement("img");
        image.setAttribute("src",element.image)
        image.style.width="100px"
        
        let imgdiv=document.createElement("div")

        let title = document.createElement("p");
        title.textContent = element.title;
        
        let titlediv=document.createElement("div");
        titlediv.style.marginLeft="15px"
      
        let div2=document.createElement("div");
        div2.style.width="20%"
        
        let div3=document.createElement("div");
        div3.style.width="40%"
  
        let Price=document.createElement("h5");
        Price.textContent=  `MRP ₹${element.price}`;

        let quantity=document.createElement("p");
        quantity.textContent="Order Qty:-"+ element.quantity

        let Remove=document.createElement("button");
        Remove.style.backgroundColor="rgb(51,51,51)"
        Remove.style.color="white"
        Remove.style.padding="20px"
        Remove.style.borderRadius="5px"
        Remove.style.width="150px"
        Remove.style.border="none"
        Remove.style.marginLeft="10px"
        Remove.textContent="Remove"

        let Increase=document.createElement("button");
        Increase.textContent="+"
        Increase.style.backgroundColor="white"
        Increase.style.color="black"
        Increase.style.padding="3px"
       
        let Decrease=document.createElement("button");
        Decrease.textContent="-"
        Decrease.style.backgroundColor="white"
        Decrease.style.color="black"
        Decrease.style.padding="3px"
        Decrease.style.marginLeft="3px"
        
        
        Remove.addEventListener("click",() => {
            ProductData =ProductData.filter((ele)=>{
            return ele.title!==element.title;
        })

        localStorage.setItem("card-data",JSON.stringify(ProductData));
        displayData(ProductData)
        });

        Increase.addEventListener("click",()=>{
        element=element.quantity++;

        localStorage.setItem("card-data",JSON.stringify(ProductData));
        displayData(ProductData)
        });
     
        Decrease.addEventListener("click",()=>{
            if(element.quantity > 1){
                element=element.quantity--;
            }
        localStorage.setItem("card-data",JSON.stringify(ProductData));
        displayData(ProductData)
        })

        let sum=0;
        sum=element.price*element.quantity;
        
        let totalprice=document.createElement("h3");
        totalprice.textContent="You Pay :-"+"Rs."+ sum

        let paragraph=document.createElement("p");
        paragraph.textContent="(Including delivery and other charges.)"
       
        let paybtn=document.createElement("button");
        paybtn.textContent="PROCEED TO CHECKOUT"
        paybtn.style.backgroundColor="rgb(228,0,70)"
        paybtn.style.color="white";
        paybtn.style.border="none"
        paybtn.style.width="250px";
        paybtn.style.padding="20px"
        paybtn.style.borderRadius="5px"
        paybtn.style.marginLeft="10px"

        paybtn.addEventListener("click",() => {
            
            localStorage.setItem("total",sum)
            window.location.href="./payment.html"
        })


        imgdiv.append(image);
        titlediv.append(title,Price);
        div1.append(imgdiv,titlediv);
        div2.append(quantity,Increase,Decrease,totalprice,paragraph);
        div3.append(paybtn,Remove)
        product.append(div1,div2,div3)
        cartcontainer.append(product)
    })

}
displayData(ProductData)