// Variables

let IsUserFound = localStorage.getItem("username"),

    favCountSapn = document.getElementById("favCountSapn"),

    favCart = localStorage.getItem("addedToFav") ? JSON.parse(localStorage.getItem("addedToFav")) : [];

/**************************************************************************************************/

// if there is item "key:value" saved in localStorage with the key "addedToFav"
// if true
if (favCart) {

    // update the count
    updateSpan(favCart)
}

/**************************************************************************************************/

// function to add item clicked to "addedToFav" in localStorage
function addToFavBtn() {

    // get all buttons with class "addToWish"
    let favBtn = [...document.getElementsByClassName("addToWish")];

    // loop through all of them
    favBtn.forEach((heart) => {

        // get the id of every button
        let id = heart.dataset.id;

        // check if the id of item clicked is aleady saved in "addedToFav"
        let heartedItem = favCart.find((item) => item.id == id)

        // if true
        if (heartedItem) {

            // disable ability to click
            heart.disabled = true;

            // change its text
            heart.innerText =  `❤︎`

        }

        // if false do nothing

        // on click at any buuton
        heart.addEventListener("click", function (event) {

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
                event.target.innerText =  `❤︎`

                // get the item clicked by id
                let redItem = toHeartItem(id);

                // add the item clicked to the "addedToCart" with items added previously
                favCart = [...favCart, redItem]

                // update the cart in localStorage
                saveFavCart(favCart)

                // update length
                updateSpan(favCart)
            }

        })

    })

}

/**************************************************************************************************/

// function to get item clicked by id
function toHeartItem(id) {

    // get all data from localStorage
    parsedData = JSON.parse(localStorage.getItem("myData"));

    // get id of item clicked from all data
    let myHeart = parsedData.find((item) => item.id == id);

    // return the item clicked with Heart : true
    return {
        ...myHeart,
        Heart: true
    }

}

/**************************************************************************************************/

// update "addedToFav" in localStorage
function saveFavCart(favCart) {

    localStorage.setItem("addedToFav", JSON.stringify(favCart))

}

/**************************************************************************************************/

// function to update length based on "addedToFav" length
function updateSpan(favCart) {

    favCountSapn.innerText = `${favCart.length}`

}

/**************************************************************************************************/