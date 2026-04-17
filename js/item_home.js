fetch('products.json')
.then(response => response.json())
.then(data => {
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const swiper_items_sale = document.getElementById("swiper_items_sale");

    const swiper_Electronics = document.getElementById("swiper_Electronics");

    const swiper_Appliances = document.getElementById("swiper_Appliances");


    const swiper_Mobile = document.getElementById("swiper_Mobile");


    data.forEach(prodect => {
        if(prodect.old_price){

            const isCart = cart.some(cartitem => cartitem.id === prodect.id)

            const percent_discount = Math.floor((prodect.old_price - prodect.price) / prodect.old_price * 100 )


            swiper_items_sale.innerHTML += `
        
                     <div class="swiper-slide prodect">

                        <span class="sale_present">%${percent_discount}</span>

                        <div class="img_prodect">
                            <a href="#"><img src="${prodect.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_prodect"><a href="#">${prodect.name}</a></p>
                             <div class="price">
                                <p><span>$${prodect.price}</span></p>
                                <p class="old_price">$${prodect.old_price}</p>
                             </div>
                             <div class="icons">
                                <span class="btn_add_card ${isCart ? "active" : ""}" data-id="${prodect.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isCart ? "Item in cart" : "add to card"} 
                                </span>
                                
                                <span class="icon_prodect">
                                     <i class="fa-regular fa-heart"></i>
                                    </span>
                             </div>

                    </div>

        
        `
    
    }

    });


    data.forEach(prodect => {

            const old_price_paragraf = prodect.old_price ? ` <p class="old_price">$${prodect.old_price}</p>` : "";

            const percent_discount_div = prodect.old_price ? `<span class="sale_present">%${Math.floor((prodect.old_price - prodect.price) / prodect.old_price * 100 )}</span>` : "";
             


          if(prodect.catetory == "electronics"){


                const isCart = cart.some(cartitem => cartitem.id === prodect.id)
            
                     swiper_Electronics.innerHTML += `
        
                     <div class="swiper-slide prodect">

                        ${percent_discount_div}

                        <div class="img_prodect">
                            <a href="#"><img src="${prodect.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_prodect"><a href="#">${prodect.name}</a></p>
                             <div class="price">
                                <p><span>$${prodect.price}</span></p>

                                ${old_price_paragraf}
                             </div>
                             <div class="icons">
                                <span class="btn_add_card ${isCart ? "active" : ""}" data-id="${prodect.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isCart ? "Item in cart" : "add to card"} 
                                </span>
                                
                                <span class="icon_prodect">
                                     <i class="fa-regular fa-heart"></i>
                                    </span>
                             </div>

                    </div>

        
        `
    
    }

    });

    

    data.forEach(prodect => {

            const old_price_paragraf = prodect.old_price ? ` <p class="old_price">$${prodect.old_price}</p>` : "";

            const percent_discount_div = prodect.old_price ? `<span class="sale_present">%${Math.floor((prodect.old_price - prodect.price) / prodect.old_price * 100 )}</span>` : "";
             


          if(prodect.catetory == "appliances"){

                    const isCart = cart.some(cartitem => cartitem.id === prodect.id)
            
                     swiper_Appliances.innerHTML += `
        
                     <div class="swiper-slide prodect">

                        ${percent_discount_div}

                        <div class="img_prodect">
                            <a href="#"><img src="${prodect.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_prodect"><a href="#">${prodect.name}</a></p>
                             <div class="price">
                                <p><span>$${prodect.price}</span></p>

                                ${old_price_paragraf}
                             </div>
                             <div class="icons">
                                <span class="btn_add_card ${isCart ? "active" : ""}" data-id="${prodect.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isCart ? "Item in cart" : "add to card"} 
                                </span>
                                
                                <span class="icon_prodect">
                                     <i class="fa-regular fa-heart"></i>
                                    </span>
                             </div>

                    </div>

        
        `
    
    }

    });



       data.forEach(prodect => {

            const old_price_paragraf = prodect.old_price ? ` <p class="old_price">$${prodect.old_price}</p>` : "";

            const percent_discount_div = prodect.old_price ? `<span class="sale_present">%${Math.floor((prodect.old_price - prodect.price) / prodect.old_price * 100 )}</span>` : "";
             


          if(prodect.catetory == "mobiles"){
             const isCart = cart.some(cartitem => cartitem.id === prodect.id)
            
                     swiper_Mobile.innerHTML += `
        
                     <div class="swiper-slide prodect">

                        ${percent_discount_div}

                        <div class="img_prodect">
                            <a href="#"><img src="${prodect.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_prodect"><a href="#">${prodect.name}</a></p>
                             <div class="price">
                                <p><span>$${prodect.price}</span></p>

                                ${old_price_paragraf}
                             </div>
                             <div class="icons">
                                <span class="btn_add_card ${isCart ? "active" : ""}" data-id="${prodect.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isCart ? "Item in cart" : "add to card"} 
                                </span>-
                                
                                <span class="icon_prodect">
                                     <i class="fa-regular fa-heart"></i>
                                    </span>
                             </div>

                    </div>

        
        `
    
    }

    });



})