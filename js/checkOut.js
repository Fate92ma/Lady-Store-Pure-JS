// Variables

let userOrNot = localStorage.getItem("username"),

    inputs = document.getElementsByClassName("inputs")[0],

    toOrder = JSON.parse(localStorage.getItem("addedToCart")),

    purchase = document.getElementsByClassName("purchase")[0],

    orderInfo = document.getElementsByClassName("orderInfo")[0],

    orderTotal = document.getElementsByClassName("orderTotal")[0],

    getResult,

    overlay = document.getElementById("overlay"),

    input = [...document.getElementsByTagName("input")],

    checkInputs,
    
    fees = document.getElementsByClassName("fees")[0];

// Events

window.addEventListener("load", checkCart);

purchase.addEventListener("click", checkAndBuy);

/**************************************************************************************************/

// function to check if there is item added to cart 
function checkCart() {

    // if the viewer of the page isn't a user
    if (!userOrNot) notUser()

    //
    else {

        // if cart is empty or not found
        if (toOrder == null || toOrder.length == 0) nothingToShip()

        // if not empty
        // display its data in dom
        else displayInDom(toOrder, orderInfo, orderTotal)
        
    }
}

/**************************************************************************************************/

// function to write a msg when the viewer of the page is not a user
function notUser() {

    inputs.innerHTML = `<center>You Don't Have Permission To View This Page.</center>`

}

/**************************************************************************************************/

// function to write a msg when cart is empty
function nothingToShip() {

    inputs.innerHTML = `<center>You Don't Have Products To Ship.</center>`

}

/**************************************************************************************************/

// function to display data in dom
function displayInDom(array, whereToDisplay, viewMoney) {

    getResult = "";

    let tempTotal = 0;

    array.map((item) => {

        let name = item.name,
            count = item.count,
            money = (item.price * item.count).toFixed(2);

        tempTotal += item.price * item.count;

        getResult +=
            `<p class="order">
<span>${name} [${count}]</span>
<span class="price">${money}$</span>
</p>`

    })

    whereToDisplay.innerHTML = getResult;

    viewMoney.innerHTML = `<p class="order">Total: <span class="price">${tempTotal.toFixed(2)}$</span></p>`
    
    //
    if (tempTotal >= 250) fees.innerHTML = `<strong>FREE Shipping</strong>`
    
    //
    else fees.innerHTML = `Shipping Cost <strong>40$</strong>`

}

/**************************************************************************************************/

// function on click to buy items
function onPurchase() {

    overlay.style.display = "block"

    setTimeout(function () {

        overlay.style.display = "none"

        localStorage.removeItem('addedToCart');

        alert("we will contact you if needed")

        window.location = "index.html"

    }, 1000)

}

/**************************************************************************************************/

// function to check input on click to buy
function checkAndBuy() {

    checkInputs = input.every(item => item.value.trim() != "");

    //
    if (checkInputs == false) alert("pleas fill all inputs")

    //
    else onPurchase()

}

/**************************************************************************************************/