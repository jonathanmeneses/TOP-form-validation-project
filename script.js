
//Declare fields for event listening

let confirmPasswordField = document.querySelector('#password_confirm');
let passwordField = document.querySelector('#password');


// Initialize the application
function init() {
    setupEventListeners();
    checkPasswordInputs(); // Optionally check state on page load
}



// Setup event listeners
function setupEventListeners() {

    passwordField.addEventListener('input', checkPasswordInputs);
    confirmPasswordField.addEventListener('input', checkPasswordInputs);
}

// Check if passwords match or if fields are empty
function checkPasswordInputs() {
    if ((confirmPasswordField.value !== passwordField.value) || passwordField.value === '') {
        addRequiredFormatting();
        addPasswordMessage();
    } else {
        removePasswordMessage();
        removeRequiredFormatting();
    }
}



// STYLE UPDATE FUNCTIONS

function addRequiredFormatting() {
    confirmPasswordField.classList.add("error-border")
    passwordField.classList.add("error-border")

}

function addPasswordMessage() {
    const div = document.createElement('div');

    // Add the "error-message" class to the div
    div.className = 'error-message';

    // Set the text content of the div
    div.textContent = '*Password must match';

    div.id = 'password-error-message'

    // Select the parent element of the password input field
    const passwordInput = document.querySelector('#password');
    const parentElement = passwordInput.parentNode;

    // Append the error message div to the parent element
    if (!document.querySelector('#password-error-message')) {
        parentElement.appendChild(div);
    }
}

function removeRequiredFormatting() {
    confirmPasswordField.classList.remove("error-border")
    passwordField.classList.remove("error-border")
}

function removePasswordMessage() {
    const div = document.querySelector('#password-error-message');
    if (div != null) {
        div.remove();
    }

}


// starting with a first call
init()