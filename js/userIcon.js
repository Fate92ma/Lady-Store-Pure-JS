// Variables

let itemsCountSapn = document.getElementById("itemsCountSapn"),

    favCountSapn = document.getElementById("favCountSapn");

// "cart" in localStorage
let myCart = localStorage.getItem("addedToCart") ? JSON.parse(localStorage.getItem("addedToCart")) : [];

// "wishlist" in localStorage
let favCart = localStorage.getItem("addedToFav") ? JSON.parse(localStorage.getItem("addedToFav")) : [];

// check if there is items in key "addedToCart" in localStorage
// if true
if (myCart) {

    // update the lenght
    setCartValues(myCart)

}

// check if there is items in key "addedToFav" in localStorage
// if true
if (favCart) {

    // update the lenght
    updateSpan(favCart)
}

// function to get lenght of all items added to localStorage "addedToCart"
function setCartValues(cart) {

    let tempCount = 0;

    // lenght of all item.count of items
    cart.map((item) => tempCount += item.count)

    itemsCountSapn.innerText = `${tempCount}`;

}

// function to update number based on "wishlist" lenght
function updateSpan(favCart) {

    favCountSapn.innerText = `${favCart.length}`

}