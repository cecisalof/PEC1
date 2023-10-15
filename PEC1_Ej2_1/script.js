const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Input error
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const checkEmail = (input) => {
    // matches an email adress with regEx
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEx.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

// Check required fields
const checkRequired = (inputArr) => {
    // looping through input values
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    });
}

// Check input lenght
const checkLength = (input, min, max) => {
    const redExCutom = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/

    if (input.id === 'password' || input.id === 'password2') {
        if (redExCutom.test(input.value.trim())) {
            showSuccess(input)
        } else {
            showError(input, 'Password is not valid')
        }
    } else if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        )
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        )
    } else {
        showSuccess(input)
    }
}

// Check password match
const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}


// check age
const checkAge = (input) => {
    if (input.value >= 0 && input.value < 100) {
        showSuccess(input)
    } else {
        showError(input, 'Enter valid age')
    }
}

// Get fieldName
const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit', function (e) {
    // intercept the submit action to perform tasks before the form is submitted.
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 8, 25)
    checkEmail(email)
    checkPasswordMatch(password, password2)
    checkAge(age)
})