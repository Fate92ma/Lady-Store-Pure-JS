// Variables

let faTimes = document.getElementsByClassName("fa-times")[0];

// Events

faTimes.addEventListener("click", removeAd);

/**************************************************************************************************/

// function to remove ad banner
function removeAd(event) {

    if (event.target.classList.contains("fa-times")) faTimes.parentElement.remove()

}

/**************************************************************************************************/