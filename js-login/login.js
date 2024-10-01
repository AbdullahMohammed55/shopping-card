let username = document.querySelector('#user_name');
let password = document.querySelector('#pass_person');
let btn_login = document.querySelector('.but_login');

let getUsername = localStorage.getItem('Username');
let getPassword = localStorage.getItem('Password');

btn_login.addEventListener('click', (e) => {
    e.preventDefault();
    if (username.value === '' || password.value === '') {
        alert('plaease enter your username and password');
    } else {
        if (getUsername && getUsername.trim() === username.value.trim() && getPassword && getPassword.trim() === password.value) {
            setTimeout(() => {
                window.location = 'index.html';
            }, 1500)
        } else {
            alert("this username or password is not correct")
        }
    }
})