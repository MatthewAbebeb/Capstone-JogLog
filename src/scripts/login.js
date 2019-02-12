import runsCollection from "./runsCollection"

//put in an object and export as a method import into main.js and call it//
const loginForm = {
    getAndAppendLogin() {

let loginHeader = document.createElement("h2")
loginHeader.textContent = "JogLog - Login"

let loginUserNameField = document.createElement("fieldset")

let loginUserNameLabel = document.createElement("label")
loginUserNameLabel.textContent = "Username"
loginUserNameLabel.setAttribute("for", "user_name")
let loginUserNameInput = document.createElement("input")
loginUserNameInput.setAttribute("id", "user_name")
loginUserNameInput.setAttribute("name", "user_name")

loginUserNameField.appendChild(loginUserNameLabel)
loginUserNameField.appendChild(loginUserNameInput)

let loginUserEmailField = document.createElement("fieldset")

let loginUserEmailLabel = document.createElement("label")
loginUserEmailLabel.textContent = "Email Address"
loginUserEmailLabel.setAttribute("for", "user_email")
let loginUserEmailInput = document.createElement("input")
loginUserEmailInput.setAttribute("id", "user_email")
loginUserEmailInput.setAttribute("name", "user_email")

loginUserEmailField.appendChild(loginUserEmailLabel)
loginUserEmailField.appendChild(loginUserEmailInput)

let loginButton = document.createElement("button")
loginButton.textContent = "Login"
loginButton.setAttribute("class", "login_button")
loginButton.addEventListener("click", this.handleLoginUser)

let registerButton = document.createElement("button")
registerButton.textContent = "Register"
registerButton.setAttribute("class", "register_button")

let loginFormFragment = document.createDocumentFragment()
loginFormFragment.appendChild(loginHeader)
loginFormFragment.appendChild(loginUserNameField)
loginFormFragment.appendChild(loginUserEmailField)
loginFormFragment.appendChild(loginButton)
loginFormFragment.appendChild(registerButton)

let loginFormArticle = document.querySelector(".output_loginform")
loginFormArticle.appendChild(loginFormFragment)
    },

    handleLoginUser(event) {
        console.log(event)
        let loginUserName = document.querySelector("#user_name").value
        let loginUserEmail = document.querySelector("#user_email").value

        let loginUser = {
            name: loginUserName,
            email: loginUserEmail
        }

        runsCollection.getAllUsers()
        .then(Users => {
            console.log(Users)
            for (var i = 0; i < Users.length; i++) {
                console.log(loginUser.name, loginUser.email)

                if (loginUser.name === Users[i].name && loginUser.email === Users[i].email) {
                console.log("Welcome");
                sessionStorage.setItem("name", loginUser.name)
            }
        }
    })
    }
}


export default loginForm;
