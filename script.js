const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.InnerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.InnerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    
}

function validateInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username)
    }

    if(emailValue === '') {
        if(emailValue === '') {
            setError(email, 'Email is required');
        }else if(!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        }else (
            setSuccess(email)
        )
    }
    if(passwordValue === '') {
        
    }
}

const toggleButton = document.getElementById('toggle-button');
    const naviList = document.getElementById('navi-list');

    toggleButton.addEventListener('click', () => {
        naviList.classList.toggle('active');
    })