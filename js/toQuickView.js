// function to save id of clicked item to view its details in details page
function toQuickView() {

    // get all buttons with class "quickView"
    let quickViewBtn = [...document.getElementsByClassName("quickView")];

    quickViewBtn.forEach((item) => {

        item.addEventListener("click", function (event) {

            let id = event.target.dataset.id;

            // get the id of item clicked and save it in localStorage
            localStorage.setItem("toQuickView", id)

            // open item details page
            window.open('itemDetails.html', '_blank')

        })

    })

}