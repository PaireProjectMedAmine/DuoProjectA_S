var adminEmail = "dhibamine"
var adminPassword = "123"

function login() {
    var enteredEmail = document.getElementById('username').value
    var enteredPassword = document.getElementById('password').value
    var messageContainer = document.getElementById('messageContainer')

    messageContainer.innerHTML = ''

    if (enteredEmail === adminEmail && enteredPassword === adminPassword) {
        messageContainer.innerHTML = '<p>Login successful!</p>'
        window.location.href ="../admin/index.html"
    } else {
        messageContainer.innerHTML = '<p>Login failed. Please check your username and password.</p>'
    }
}

