function validateForm(event) {
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var date = document.getElementById('date').value;
    var color = document.getElementById('color').value;

    // Validate each field
    var isValid = true;

    if (name === '') {
        showError('nameError', 'Please enter your name');
        isValid = false;
    }

    if (email === '') {
        showError('emailError', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    if (phone === '') {
        showError('phoneError', 'Please enter your phone number');
        isValid = false;
    }

    if (password === '') {
        showError('passwordError', 'Please enter your password');
        isValid = false;
    } else if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long');
        isValid = false;
    }

    if (age === '') {
        showError('ageError', 'Please enter your age');
        isValid = false;
    } else if (age < 1 || age > 150) {
        showError('ageError', 'Please enter a valid age');
        isValid = false;
    }

    if (gender === '') {
        showError('genderError', 'Please select your gender');
        isValid = false;
    }

    if (date === '') {
        showError('dateError', 'Please enter a date');
        isValid = false;
    }

    if (color === '') {
        showError('colorError', 'Please select a color');
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        document.getElementById('myForm').submit();
    }
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}