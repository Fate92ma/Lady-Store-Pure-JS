// Variables

let displayProducts = document.getElementById("displayProducts"),

    myRequest,

    myData,

    getResult;

// Events

window.addEventListener("load", getData);

/**************************************************************************************************/

// function to get data from json file
function getData() {

    myRequest = new XMLHttpRequest()

    myRequest.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myData = JSON.parse(this.responseText)

            displayInDom(myData, displayProducts)

        }

    }

    myRequest.onerror = function () {
        throw "Request Failed"
    }

    myRequest.open("GET", "myData/products.json", true)

    myRequest.send()

}

/**************************************************************************************************/

// function to display data in dom
function displayInDom(array, whereToDisplay) {

    getResult = "";

    array.map((item) => {

        let name = item.name,
            price = parseInt(item.price).toFixed(2),
            image = item.image_link,
            hex_value = item.product_colors.map((element) => element.hex_value).map((color) => color).length

        getResult +=
            `<div class="myProduct">
<h3>${name}</h3>
<img src="${image}" alt="makeup">
<p class="itemPrice">${price}$</p>
<p class="avaColor">Available In <span>${hex_value}</span> Colors</p>

<div class="productBtns">
<button class="addToWish" data-id="${item.id}">♡</button>
<button class="addToCart" data-id="${item.id}">Add To Cart</button>
<button class="quickView" data-id="${item.id}"></button>
</div>

</div>`
    })

    whereToDisplay.innerHTML = getResult;

    // save data in localStorage
    localStorage.setItem("myData", JSON.stringify(myData));

    addToCartBtn();

    addToFavBtn();

    toQuickView();

}

/**************************************************************************************************/