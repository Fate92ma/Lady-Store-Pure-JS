// Variables

let isUser = localStorage.getItem("username"),

    myCartInfo = document.getElementsByClassName("myCartInfo")[0],

    smallCart = document.getElementsByClassName("smallCart")[0],

    itemsCount = document.getElementById("itemsCount"),

    itemsPrice = document.getElementById("itemsPrice"),

    clearCart = document.getElementsByClassName("clearCart")[0],

    toCheckOut = document.getElementsByClassName("toCheckOut")[0];

// Events

window.addEventListener("load", checkMyCart);

smallCart.addEventListener("click", actionOnItem);

clearCart.addEventListener("click", clearAllItems);

toCheckOut.addEventListener("click", toCheckOutfn);

// function to check user and length of myCart
function checkMyCart() {

    // if the viewer of the page is not a user
    if (!isUser) notUser()

    // 
    else {

        // if myCart is empty
        if (myCart.length == 0) emptyCart()

        // if not empty
        else cartIsFound()

    }

}

// function to write a msg when the viewer of the page is not a user
function notUser() {

    myCartInfo.innerHTML = `<center>You Don't Have Permission To View This Page.</center>`

}

// function to write a msg when myCart is empty
function emptyCart() {

    myCartInfo.innerHTML = `<center>Your Cart Is Empty.</center>`

}

// function to run when mycart is full
function cartIsFound() {

    // update the price
    setCartValues(myCart)

    // loop through all the items and display in dom
    myCart.map((item) => {

        miniItem(item)

        // allow quick view
        toQuickView()

    })

}

// function to sum the price of all items added to localStorage and get its lenght
function setCartValues(cart) {

    let tempCount = 0;

    let tempPrice = 0;

    cart.map((item) => {

        // lenght of item.count of every item
        tempCount += item.count

        // multiple the price and count
        tempPrice += item.price * item.count

    })

    itemsCountSapn.innerText = `${tempCount}`;

    itemsCount.innerText = `${tempCount}`;

    itemsPrice.innerText = `${tempPrice.toFixed(2)}$`;

}

// function to display item in mini cart div on click to add to localStorage
function miniItem(item) {

    return smallCart.innerHTML +=

        `<section class="smallItem">

<div>
<p data-id="${item.id}" class="quickView">${item.name}</p>
<p>${parseInt(item.price).toFixed(2)} $</p>
<p class="removeItem" data-id="${item.id}">Remove</p></div>

<div>
<i class="fa fa-plus" data-id="${item.id}"></i>
<p data-id="${item.id}" class="itemCount">${item.count}</p>
<i class="fa fa-minus" data-id="${item.id}"></i>
</div>

</section>`

}

// function to remove item from "addToCart" in localStorage
function removeItemfn(id) {

    // get all items but not the clicked one
    myCart = myCart.filter((item) => item.id != id);

    // update the price
    setCartValues(myCart)

    // update the cart
    saveCart(myCart)

    // after remove item check length
    // if length == 0, cart is empty
    if (myCart.length == 0) emptyCart()

}

// on click on the div that holds all the cart info

// function to update the item details based on "target"
function actionOnItem(event) {

    // if the element clicked contain "removeItem"
    if (event.target.classList.contains("removeItem")) {

        let removeItem = event.target;

        // get the id of that item
        let id = removeItem.dataset.id;

        // remove its parent element and above from the dom
        smallCart.removeChild(removeItem.parentElement.parentElement)

        // remove it from localStorage, ...etc
        removeItemfn(id)

    }

    // if the element clicked contain "+"
    if (event.target.classList.contains("fa-plus")) {

        let toIncrease = event.target;

        let id = toIncrease.dataset.id;

        // get the item with that id from localStorage
        let tempItem = myCart.find((item) => item.id == id);

        // increase its count on click
        tempItem.count = tempItem.count + 1

        // update the cart
        saveCart(myCart)

        // update the price
        setCartValues(myCart)

        // view the count in dom
        toIncrease.nextElementSibling.innerText = tempItem.count

    }

    // if the element clicked contain "-"
    if (event.target.classList.contains("fa-minus")) {

        let toDecrease = event.target;

        let id = toDecrease.dataset.id;

        // get the item with that id from localStorage
        let tempItem = myCart.find((item) => item.id == id)

        // decrease its count on click
        tempItem.count = tempItem.count - 1

        // if the count is greater than zero
        if (tempItem.count > 0) {

            // update the cart
            saveCart(myCart)

            // update the price
            setCartValues(myCart)

            // view the count in dom
            toDecrease.previousElementSibling.innerText = tempItem.count

            // if not greater than zero    
        } else {

            // remove the count from dom
            smallCart.removeChild(toDecrease.parentElement.parentElement)

            // remove the item
            removeItemfn(id)

        }
    }
}

// function to remove all items from localStorage and dom
function clearAllItems() {

    // loop through all items ang get its id
    myCart.map((item) => {

        let id = item.id;

        // remove every item by id
        removeItemfn(id)

        // update the price
        setCartValues(myCart)

        // update the cart
        saveCart(myCart)

    })

    // if children of the div holding all item is greater than zero
    // keep removing item
    while (smallCart.children.length > 0) {

        smallCart.removeChild(smallCart.children[0])

        myCartInfo.innerHTML = `<center>Your Cart Is Empty.</center>`

    }

    emptyCart()
}

// function to update cart in localStorage
function saveCart(cart) {

    localStorage.setItem("addedToCart", JSON.stringify(cart))

}

// function to go to check out page
function toCheckOutfn() {

    window.location = "checkOut.html"

}