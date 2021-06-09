// Variables

let form = document.getElementsByTagName("form")[0],

    up_username = document.getElementsByClassName("up_username")[0],

    up_email = document.getElementsByClassName("up_email")[0],

    up_gender = document.getElementsByClassName("up_gender")[0],

    getGender,

    up_password = document.getElementsByClassName("up_password")[0],

    checkInput = document.getElementsByClassName("checkInput")[0],

    up_signUp = document.getElementsByClassName("up_signUp")[0];

// Events

checkInput.addEventListener("click", togglePass);

up_signUp.addEventListener("click", checkAndSave);

// prevent refresh on submit form
form.addEventListener("submit", (event) => event.preventDefault())

// function to show and hide password
function togglePass() {

    // it type of the input is "password" convert it to "text" to show password
    if (up_password.type == "password") {

        up_password.type = "text"

        checkInput.nextElementSibling.innerText = "hide password"

    }

    // if not, set default for the input
    else {

        up_password.type = "password"

        checkInput.nextElementSibling.innerText = "show password"

    }

}

// function to save user data in localStorage
function checkAndSave() {

    // if inputs are empty
    if (up_username.value == "" || up_email.value == "" || up_password.value == "") {

        alert("please fill all inputs")

    }

    // if inputs aren't empty
    else {

        // save username in localStorage
        localStorage.setItem("username", up_username.value);

        // check if string is a valid email
        // if true
        // save in localStorage
        if (/\S+@\S+\.\S+/.test(up_email.value) == true) {

            localStorage.setItem("email", up_email.value)

        }

        // if false
        // don't save, alert return false
        else {

            alert("please enter a valid email address")

            return false

        }

        // check select
        // if value is "hidden option"
        // means user didn't choose any
        // don't save, alert return false
        if (up_gender.value == "select gender") {

            alert("please enter your gender")

            return false

        }

        // if value isn't "hidden option"
        // save user choice in localStorage
        else {

            localStorage.setItem("gender", up_gender.value)

        }

        // save password in localStorage
        localStorage.setItem("password", up_password.value);

        // redirect to sign in page
        setTimeout(() => window.location = "signIn.html", 500);

    }
}