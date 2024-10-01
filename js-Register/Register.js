let first_name = document.querySelector('#fname');
let last_name = document.querySelector('#lname');
let username = document.querySelector('#username')
let email = document.querySelector('#email');
let password = document.querySelector('#password')
let but_register = document.querySelector('.but-regsit')

but_register.addEventListener('click', (e) => {
    e.preventDefault();
    if (first_name.value === '' || last_name.value === '' || email.value === '' || password.value === '' || username.value === '') {
        alert('please enter your data')
    } else {
        localStorage.setItem('FirstName', first_name.value);
        localStorage.setItem('LastName', last_name.value);
        localStorage.setItem('Username', username.value);
        localStorage.setItem('Email', email.value);
        localStorage.setItem('Password', password.value);
        setTimeout(() => {
            window.location = 'login.html';
        }, 1500)
    }
})