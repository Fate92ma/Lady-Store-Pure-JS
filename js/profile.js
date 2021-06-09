// Variables

let isUser = localStorage.getItem("username"),

    userEmail = localStorage.getItem("email"),

    userPassword = localStorage.getItem("password"),

    userGender = localStorage.getItem("gender"),

    userCart = localStorage.getItem("addedToCart"),

    parsedUserCart = JSON.parse(localStorage.getItem("addedToCart")),

    userFav = localStorage.getItem("addedToFav"),

    parsedUserFav = JSON.parse(localStorage.getItem("addedToFav")),

    userInfo = document.getElementsByClassName("userInfo")[0];

// Events

window.addEventListener("load", checkUserFn);

// function
function checkUserFn() {

    if (!isUser) noUserFound()

    else {

        userInfo.innerHTML =

            `<div class="userCard">
        <h3>${getGender()}</h3>
        <p>Username: <b>${isUser}</b></p>
        <p>Email: <b>${userEmail}</b></p>
        <p>Password: <b>${userPassword}</b></p>
        <p>Items In Your Cart: <a href="myCart.html">${countCart()}</a></p>
        <p>Items In Your Wishlist: <a href="myWishlist.html">${countHearts()}</a></p>
        <a href="index.html" class="home">Continue Shopping</a>
        <a href="editProfile.html" class="home">Edit Profile</a>
        </div>`

    }

}

// function to write a msg when the viewer of the page is not a user
function noUserFound() {

    userInfo.innerHTML = `<center>You Don't Have Permission To View This Page.</center>`

}

// function to check user gender
function getGender() {

    if (userGender == "male") return "👦"

    if (userGender == "female") return "👩"

    else return "🐵"

}

// function to get item.count of items in "myCart"
function countCart() {

    if (userCart == null) return 0

    else {

        let tempCount = 0;

        parsedUserCart.map((item) => {

            tempCount += item.count

        })

        return tempCount

    }

}

// function to get length of items in "myWishlist"
function countHearts() {

    if (userFav == null) return 0

    else return parsedUserFav.length

}