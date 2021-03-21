// Variables

let global_list = document.getElementById("global_list"),

    user_List = document.getElementById("user_List"),

    userDom = document.getElementsByClassName("userDom")[0],

    signOut = document.getElementsByClassName("signOut")[0],

    checkUser = localStorage.getItem("username"),

    checkPass = localStorage.getItem("password");

// Events

signOut.addEventListener("click", byeBye)

/**************************************************************************************************/

// if user data is found in localStorage
if (checkUser && checkPass) {

    global_list.remove()

    user_List.style.display = "flex"

    userDom.innerText = `${checkUser}`

}

/**************************************************************************************************/

// function to sign out and clear data from localStorage
function byeBye() {

    localStorage.removeItem("addedToCart");

    localStorage.removeItem("addedToFav");

    localStorage.removeItem("username");

    localStorage.removeItem("email");

    localStorage.removeItem("gender");

    localStorage.removeItem("password");

    alert(`Hope To See You Soon ${checkUser}`)

    setTimeout(() => location.reload(true), 500)

}

/**************************************************************************************************/