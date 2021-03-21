// Variables

let myCart = localStorage.getItem("addedToCart") ? JSON.parse(localStorage.getItem("addedToCart")) : [];

/**************************************************************************************************/

// if there is item "key:value" saved in localStorage with the key "addedToCart"
// if true
if (myCart) {
    
    // update the count
    setCount(myCart)
}

/**************************************************************************************************/

// function to add item clicked to "addedToCart" in localStorage
function addToCartBtn() {

    // get all buttons with class "addToCart"
    let buyBtn = [...document.getElementsByClassName("addToCart")];

    // loop through all of them
    buyBtn.forEach((btn) => {

        // get the id of every button
        let id = btn.dataset.id;

        // check if the id of item clicked is aleady saved in "addedToCart"
        let alreadyAdded = myCart.find((item) => item.id == id)

        // if true
        if (alreadyAdded) {
            
            // disable ability to click
            btn.disabled = true;
            
            // change its text
            btn.innerText = "Added";
        }
        
        // if false do nothing

        // on click at any buuton
        btn.addEventListener("click", function (event) {

            // if the click not from user
            // redirect to sign up page
            if (!IsUserFound) {
                window.location = "signUp.html"
            }
            
            // if the click from user
            else {

                // disable ability to click on this button
                event.target.disabled = true;

                // change its text
                event.target.innerText = "Added";

                // get the item clicked by id
                let loremItem = itemToBuy(id);

                // add the item clicked to the "addedToCart" with items added previously
                myCart = [...myCart, loremItem]

                // update the cart in localStorage
                saveCart(myCart)

                // update length
                setCount(myCart)

            }

        })

    })

}

/**************************************************************************************************/

// function to get item clicked by id
function itemToBuy(id) {

    // get all data from localStorage
    parsedData = JSON.parse(localStorage.getItem("myData"));

    // get id of item clicked from all data
    let grabbed = parsedData.find((item) => item.id == id)

    // return the item clicked with count : 1
    return {
        ...grabbed,
        count: 1
    }

}

/**************************************************************************************************/

// update "addedToCart" in localStorage
function saveCart(cart) {

    localStorage.setItem("addedToCart", JSON.stringify(cart))

}

/**************************************************************************************************/

// function to get length of item.count
function setCount(cart) {

    let tempCount = 0;

    cart.map((item) => {

        tempCount += item.count

    })

    itemsCountSapn.innerText = `${tempCount}`
}

/**************************************************************************************************/