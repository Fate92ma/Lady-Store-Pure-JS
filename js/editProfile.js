// Variables

let isUser = localStorage.getItem("username"),

    form = document.getElementsByTagName("form")[0],

    formInputs = document.getElementsByClassName("formInputs")[0],

    edit_username = document.getElementsByClassName("edit_username")[0],

    edit_email = document.getElementsByClassName("edit_email")[0],

    edit_password = document.getElementsByClassName("edit_password")[0],

    saveEdits = document.getElementsByClassName("saveEdits")[0],

    backProfile = document.getElementsByClassName("backProfile")[0];

// Events

window.addEventListener("load", checkUserFn);

saveEdits.addEventListener("click", updateMyInfo);

backProfile.addEventListener("click", toProfile);

// function to check if user is found or not
function checkUserFn() {

    if (!isUser) noUserFound()

}

// prevent refresh on submit form
form.addEventListener("submit", (event) => event.preventDefault())

// function to write a msg when the viewer of the page is not a user
function noUserFound() {

    formInputs.innerHTML = `<center>You Don't Have Permission To View This Page.</center>`

}

// function to edit input value
function updateInfo(name, value) {

    let myValue = value.value;

    if (myValue.trim().length == 0) return false

    else localStorage.setItem(name, myValue)

}

// function to update user info and redirect to profile page
function updateMyInfo() {

    updateInfo("username", edit_username)

    // if the value is valid email address, update it
    if (/\S+@\S+\.\S+/.test(edit_email.value) == true) updateInfo("email", edit_email)

    updateInfo("password", edit_password)

    setTimeout(() => window.location = "profile.html", 500)

}

// function to redirect to profile page
function toProfile() {

    window.location = "profile.html"
}