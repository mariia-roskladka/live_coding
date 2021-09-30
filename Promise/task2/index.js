const loginForm = document.forms[0];
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const url = `https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/`;

const validateFormHandler = () => {
    if (loginForm.requiredFields()) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', true);
    }
};
loginForm.addEventListener('input', validateFormHandler);

//algo
// 1. read form - get user info
// 2. send data to server
// 3. handle server response 
const createUserHendler = event => {
    event.preventDefault();

    //bad option

    //   const user = {
    //     email: emailInput.value,
    //     name: nameInput.value,
    //     password: passwordInput.value,
    // };

    //good option
    // debugger;
    const userData = Object.fromEntries(new FormData(loginForm));

    fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(body => {
            loginForm.reset();
            alert(body);
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
        });
};
loginForm.addEventListener('submit', createUserHendler);