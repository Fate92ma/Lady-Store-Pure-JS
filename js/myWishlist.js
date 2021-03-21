// Variables

let isUser = localStorage.getItem("username"),

    myHearts = document.getElementsByClassName("myHearts")[0],

    getResult,

    clearWishlist = document.getElementsByClassName("clearWishlist")[0];

// Events

window.addEventListener("load", checkHearts);

myHearts.addEventListener("click", heartsOnAction);

clearWishlist.addEventListener("click", unHeartAll);

/**************************************************************************************************/

// function to check user and length of favCart
function checkHearts() {

    // if the viewer of the page is not a user
    if (!isUser) noUserFound()

    //
    else {

        // if favCart is empty
        if (favCart.length == 0) noHeartsFound()

        // if not empty display items in dom
        else displayInDom(favCart, myHearts)

    }

}

/**************************************************************************************************/

// function to write a msg when the viewer of the page is not a user
function noUserFound() {

    myHearts.innerHTML = `<center>You Don't Have Permission To View This Page.</center>`

    clearWishlist.remove()

}

/**************************************************************************************************/

// function to write a msg when favcart is empty
function noHeartsFound() {

    myHearts.innerHTML = `<center>Your Wishlist Is Empty.</center>`

    clearWishlist.remove()

}

/**************************************************************************************************/

// function to display data in dom
function displayInDom(array, whereToDisplay) {

    getResult = "";

    array.map((item) => {

        let name = item.name,
            price = parseInt(item.price).toFixed(2),
            image = item.image_link

        getResult +=

            `<div class="favItem">

<div>
<h3>${name}</h3>
<img src="${image}" alt="makeup">
</div>

<div>
<p class="itemPrice">${price}$</p>
<button class="quickView" data-id="${item.id}">Quick View</button>
<button class="removeHeart" data-id="${item.id}">Remove</button>
</div>

</div>`
    })

    whereToDisplay.innerHTML = getResult;

    toQuickView();

}

/**************************************************************************************************/

// on click on the div that holds wishlist items

// function to update the wishlist item based on "target"
function heartsOnAction(event) {

    // if the click on class includes "remove..."
    if (event.target.classList.contains("removeHeart")) {

        let removeHeart = event.target;

        let id = removeHeart.dataset.id;

        // remove the item based on the id
        unHeartItem(id);

        // remove the item from dom too
        myHearts.removeChild(removeHeart.parentElement.parentElement)

    }

}

/**************************************************************************************************/

// function to remove item from localStorage and dom
function unHeartItem(id) {

    // get all items but not the item clickes
    favCart = favCart.filter((item) => item.id != id)

    // update the "addedToFav" in localStorage
    saveFavCart(favCart)

    // update lenght in dom
    updateSpan(favCart)

    // after remove item check length    
    // if favCart is empty
    if (favCart.length == 0) noHeartsFound()

}

/**************************************************************************************************/

// function to update lenght in dom
function updateSpan(favCart) {

    favCountSapn.innerText = `${favCart.length}`

}

/**************************************************************************************************/

// function to update localStorage on change
function saveFavCart(favCart) {

    localStorage.setItem("addedToFav", JSON.stringify(favCart))

}

/**************************************************************************************************/

// function to clear all items from wishlist
function unHeartAll() {

    // get the id of every item in favCart
    favCart.map((item) => {

        let id = item.id;

        // remove item by id
        unHeartItem(id);

        // update lenght in dom
        updateSpan(favCart);

        // update "addedToFav" in localStorage
        saveFavCart(favCart);

    })

    noHeartsFound()

}

/**************************************************************************************************/