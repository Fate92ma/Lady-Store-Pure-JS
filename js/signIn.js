// Variables

let form = document.getElementsByTagName("form")[0],

    in_username = document.getElementsByClassName("in_username")[0],

    in_password = document.getElementsByClassName("in_password")[0],

    checkInput = document.getElementsByClassName("checkInput")[0],

    in_signIn = document.getElementsByClassName("in_signIn")[0],

    checkUser = localStorage.getItem("username"),

    checkPass = localStorage.getItem("password");

// Events

checkInput.addEventListener("click", togglePass);

in_signIn.addEventListener("click", checkAndSignIn);

/**************************************************************************************************/

// prevent refresh on submit form
form.addEventListener("submit", (event) => event.preventDefault())

/**************************************************************************************************/

// function to show and hide password
function togglePass() {

    // it type of the input is "password" convert it to "text" to show password
    if (in_password.type == "password") {

        in_password.type = "text"

        checkInput.nextElementSibling.innerText = "hide password"

    }

    // if not, set default for the input
    else {

        in_password.type = "password"

        checkInput.nextElementSibling.innerText = "show password"

    }

}

/**************************************************************************************************/

// function to check inputs and data
function checkAndSignIn() {

    // if inputs are empty
    if (in_username.value == "" || in_password.value == "") {

        alert("please enter your information below")

    }

    // compare user input with data saved in localStorage
    // if both are the same go to home page
    if (checkUser == in_username.value && checkPass == in_password.value) {

        setTimeout(() => window.location = "index.html", 500)

    }

    //
    else {

        alert("username or password is not correct")
    }

}

/**************************************************************************************************/