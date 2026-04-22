let nav_links = document.querySelector(".nav_links");

function open_menue(){
    nav_links.classList.toggle("active")
}


let category_nav_list = document.querySelector(".category_nav_list");
function click_nav_show(){
    category_nav_list.classList.toggle("active")
}

var cart = document.querySelector(".cart");

function open_closs_carty(){
    cart.classList.toggle("active")
}







fetch('products.json')
.then(response => response.json())
.then(data => {
    const addTOcartbutton = document.querySelectorAll(".btn_add_card");


    addTOcartbutton.forEach(button => {

        button.addEventListener("click", (event) => {

            const prodectId = event.target.getAttribute("data-id");

            const selectedprodect = data.find(prodect => prodect.id == prodectId);
            

            addTOcart(selectedprodect)


            const allMatchingButton = document.querySelectorAll(`.btn_add_card[data-id="${prodectId}"]`)
            allMatchingButton.forEach(btn => {
                btn.classList.add("active")
                btn.innerHTML = `    <i class="fa-solid fa-cart-shopping"></i> Item in cart `
            })



        })
    })

})

function addTOcart(prodect){
   
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push({... prodect , quantity:1});
    localStorage.setItem("cart", JSON.stringify(cart))
    UPdate_cart()
}

function UPdate_cart() {
    const item_conteiner = document.getElementById("cart_items")

    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const check_out_items = document.getElementById("check_out_items")
    if(check_out_items){
        check_out_items.innerHTML = ""
    }

    var totalprice = 0

    var totalcount = 0

    item_conteiner.innerHTML="";

    
    cart.forEach((item , index) => {
        

        let totalpriceitem = item.price * item.quantity;

        totalprice += totalpriceitem;

        totalcount += item.quantity;

        item_conteiner.innerHTML += `
        
          <div class="item_cart">
                <img src="${item.img}" alt="">
                <div class="content_cart">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${totalpriceitem}</p>
                    <div class="quantity_item">
                        <button class="decrease_quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity" data-index=${index}>+</button>
                    </div>
                </div>

                <button class="delet_item" data-index ="${index}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        
        
        `

        if(check_out_items){
            check_out_items.innerHTML = `
            
              <div class="item_cart">
                            <div class="image_name">
                                <img src="${item.img}" alt="">
                                <div class="content">
                                    <h4>${item.name}</h4>
                                    <p class="price_cart">$${totalpriceitem}</p>
                                    <div class="quantity_control">
                                        <button class="decrease_quantity" data-index=${index}>-</button>
                                        <span class="quantity">${item.quantity}</span>
                                        <button class="increase_quantity" data-index=${index}>+</button>

                                    </div>

                                </div>
                            </div>

                            <button class="delet_item"  data-index ="${index}"><i class="fa-solid fa-trash-can"></i></button>

                        </div>
            
            
            
            `
        }




    })

    const price_cart_total = document.querySelector(".price_cart_total")

    const count_item_cart = document.querySelector(".count_item_cart")

    const count_item_header = document.querySelector(".count_item_header")

        price_cart_total.innerHTML = `$${totalprice}`
        count_item_cart.innerHTML = `${totalcount}`
        count_item_header.innerHTML = `${totalcount}`
        if(check_out_items){
            const subtitle_checked = document.querySelector(".subtitle_checked")
            subtitle_checked.innerHTML =`$${totalprice}`
            const total_checked = document.querySelector(".total_checked")
            total_checked.innerHTML = `$${totalprice + 20} `
        }




    const increaseButton = document.querySelectorAll(".increase_quantity")
    
    const decreaseButton = document.querySelectorAll(".decrease_quantity")

    increaseButton.forEach(button => {
        button.addEventListener("click",(event) => {
            const itemIndex = event.target.getAttribute("data-index")
            increaseQuantity(itemIndex)
        })
    })

    decreaseButton.forEach(button => {
        button.addEventListener("click",(event) => {
            const itemIndex = event.target.getAttribute("data-index")
            decreaseQuantity(itemIndex)
        })
    })

    const deletbtn = document.querySelectorAll(".delet_item")
    deletbtn.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.closest("button").getAttribute("data-index")
            removeincart(itemIndex)
        })
    })
}


function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart[index].quantity += 1
    localStorage.setItem("cart" , JSON.stringify(cart))
    UPdate_cart()
}


function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    if(cart[index].quantity > 1){

        cart[index].quantity -= 1

    }

    localStorage.setItem("cart" , JSON.stringify(cart))
    UPdate_cart()
}




function removeincart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const removeprodect = cart.splice(index , 1)[0]
    localStorage.setItem("cart", JSON.stringify(cart))
    UPdate_cart() 
    updatebutton(removeprodect.id)
}

function updatebutton(prodectId) {
    const allMatchingButton = document.querySelectorAll(`.btn_add_card[data-id="${prodectId}"]`);
    allMatchingButton.forEach(button => {
        button.classList.remove("active");
        button.innerHTML = `    <i class="fa-solid fa-cart-shopping"></i>add to cart `;

    })
}


UPdate_cart()






