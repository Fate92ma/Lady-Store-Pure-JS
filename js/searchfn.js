// Variables

let input = document.getElementById("input"),

    inputVal;

// Events

input.addEventListener("keyup", searchForItem);

// function to search in all products
function searchForItem() {

    parsedData = JSON.parse(localStorage.getItem("myData"));

    inputVal = input.value.trim();

    let searchResult = parsedData.filter((item) => item.name.includes(inputVal) || item.name.toLowerCase().includes(inputVal))

    displayInDom(searchResult, displayProducts)

}