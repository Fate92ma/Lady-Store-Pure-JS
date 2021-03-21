// Variables

let itemDetails = document.getElementsByClassName("itemDetails")[0],

    idOfClick = localStorage.getItem("toQuickView"),

    parsedFromHome = JSON.parse(localStorage.getItem("myData")),

    TheItem = parsedFromHome.filter((item) => item.id == idOfClick),

    temp;

// Events

window.addEventListener("load", checkCart);

/**************************************************************************************************/

// function to check if there is clicked item to view or not
function checkCart() {

    if (!idOfClick) itemDetails.innerHTML = `<center>Click On Any Product To View In This Page.</center>`

}

/**************************************************************************************************/

// function to convert rating numbers to stars
function getStars(rating) {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    let output = [];

    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
        output.push('<i class="fa fa-star fa-lg" style="color: gold;"></i>&nbsp;');

    // If there is a half a star, append it
    if (i == .5) output.push('<i class="fa fa-star-o fa-lg" style="color: gold;"></i>&nbsp;');

    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
        output.push('<i class="fa fa-star-o fa-lg" style="color: gold;"></i>&nbsp;');

    return output.join('');

}

/**************************************************************************************************/

// function to display the item clicked it item details page
function displayInDom(item, whereToDisplay) {

    temp = "";

    item.map((item) => {

        let name = item.name,
            price = parseInt(item.price).toFixed(2),
            desc = item.description,
            image = item.image_link,
            hex_value = item.product_colors.map((element) => element.hex_value).map((color) => `<span class="itemColor" style="background:${color};"></span>`).join(" "),
            rating = Number(item.rating);

        temp =
            `<div class="currentItem">
<h3>${name}</h3>
<img src="${image}" alt="makeup">
<p class="itemDesc">${desc}</p>
<p class="allColor">${hex_value}</p>
<p class="itemRating">${getStars(rating)}</p>
<p class="itemPrice">${price}$</p>
<span class="itemLeft">only ${Math.floor(Math.random() * 10) + 1} left in stock!</span>
</div>`
    })

    whereToDisplay.innerHTML = temp

}

displayInDom(TheItem, itemDetails);

/**************************************************************************************************/