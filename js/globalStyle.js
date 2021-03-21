// Variables

let header = document.getElementsByTagName("header")[0],

    logo = document.getElementsByClassName("logo")[0],

    nav = document.getElementsByTagName("nav")[0],

    myList = document.getElementsByTagName("ul"),

    myBar = document.getElementsByClassName("myBar")[0],

    goTop = document.getElementById("goTop");

// Events

logo.addEventListener("click", goHome);

myBar.addEventListener("click", miniDom);

window.onscroll = imScrolling;

goTop.addEventListener("click", goToTop);

/**************************************************************************************************/

// function to apply new setting on smaller screen
function miniDom() {

    nav.style.top = header.offsetHeight + "px";

    nav.classList.toggle("miniNav");

    for (let i = 0; i < myList.length; i++) myList[i].classList.toggle("mini_ulInNav")

}

/**************************************************************************************************/

// function to redirect to hom
function goHome() {

    window.location = "index.html"

}

/**************************************************************************************************/

// function to hide and display elements based on scroll Offset
function imScrolling() {

    if (window.pageYOffset >= 400) goTop.style.display = "block"

    else goTop.style.display = "none"

}

/**************************************************************************************************/

// function to go to top of the page
function goToTop() {

    window.scroll({
        top: 0,
        behavior: "smooth"
    })

}

/**************************************************************************************************/