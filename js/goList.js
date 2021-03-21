// Variables

let goList = document.querySelectorAll('.goList li'),

    go4lips = document.getElementsByClassName("4lips")[0],

    go4face = document.getElementsByClassName("4face")[0],

    go4nails = document.getElementsByClassName("4nails")[0],

    go4all = document.getElementsByClassName("4all")[0],

    goResult;

// Events

go4lips.addEventListener("click", getLipsCosmetic);

go4face.addEventListener("click", getFaceCosmetic);

go4nails.addEventListener("click", getNailsCosmetic);

go4all.addEventListener("click", getData);

/**************************************************************************************************/

// set active class on click

for (let i = 0; i < goList.length; i++) {

    goList[i].onclick = function () {
        let current = 0;

        while (current < goList.length) {
            goList[current++].className = '';
        }

        goList[i].className = 'active';
    }
}

/**************************************************************************************************/

// function to get all products related to nails
function getNailsCosmetic() {

    parsedData = JSON.parse(localStorage.getItem("myData"));

    goResult = parsedData.filter((item) => item.product_type == "nail_polish")

    displayInDom(goResult, displayProducts)

}

/**************************************************************************************************/

// function to get all products related to face
function getFaceCosmetic() {

    parsedData = JSON.parse(localStorage.getItem("myData"));

    goResult = parsedData.filter((item) => item.product_type == "foundation")

    displayInDom(goResult, displayProducts)

}

/**************************************************************************************************/

// function to get all products related to lips
function getLipsCosmetic() {

    parsedData = JSON.parse(localStorage.getItem("myData"));

    goResult = parsedData.filter((item) => item.product_type == "lipstick")

    displayInDom(goResult, displayProducts)

}

/**************************************************************************************************/