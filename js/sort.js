// Variables

let ascending = document.getElementsByClassName("ascending")[0],

    descending = document.getElementsByClassName("descending")[0],

    topRating = document.getElementsByClassName("topRating")[0],

    avaiClrs = document.getElementsByClassName("avaiClrs")[0];

// Events

ascending.addEventListener("click", ascendingSort);

descending.addEventListener("click", descendingSort);

topRating.addEventListener("click", getTopRated);

avaiClrs.addEventListener("click", getColors);

/**************************************************************************************************/

// function to sort data by price from low to high
function ascendingSort() {

    parsedData = JSON.parse(localStorage.getItem("myData"));

    goResult = parsedData.sort((a, b) => {
        return Number(a.price) - Number(b.price)
    })

    displayInDom(goResult, displayProducts)

}

/**************************************************************************************************/

// function to sort data by price from high to low
function descendingSort() {

    parsedData = JSON.parse(localStorage.getItem("myData"));

    goResult = parsedData.sort((a, b) => {
        return Number(b.price) - Number(a.price)
    })

    displayInDom(goResult, displayProducts)

}

/**************************************************************************************************/

// function to sort data by rating from top to low
function getTopRated() {

    parsedData = JSON.parse(localStorage.getItem("myData"));

    goResult = parsedData.sort((a, b) => {
        return b.rating - a.rating
    })

    displayInDom(goResult, displayProducts)

}

/**************************************************************************************************/

// function to sort data by color lenght
function getColors() {
    
    parsedData = JSON.parse(localStorage.getItem("myData"));

    goResult = parsedData.sort((a, b) => {
        return b.product_colors.length - a.product_colors.length
    })

    displayInDom(goResult, displayProducts)
    
}

/**************************************************************************************************/