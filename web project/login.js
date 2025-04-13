document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const loginBox = document.querySelector('.login-box');
    const registerBox = document.querySelector('.register-box');
    const passwordField = document.getElementById('regPassword');

    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const number = document.getElementById('number');
    const special = document.getElementById('special');

    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginBox.classList.add('hidden');
        registerBox.classList.remove('hidden');
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerBox.classList.add('hidden');
        loginBox.classList.remove('hidden');
    });

    passwordField.addEventListener('input', function() {
        const password = passwordField.value;
        length.className = password.length >= 8 ? 'valid' : 'invalid';
        uppercase.className = /[A-Z]/.test(password) ? 'valid' : 'invalid';
        lowercase.className = /[a-z]/.test(password) ? 'valid' : 'invalid';
        number.className = /\d/.test(password) ? 'valid' : 'invalid';
        special.className = /[@#$%^&+=!]/.test(password) ? 'valid' : 'invalid';
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value.trim();

        if (document.querySelectorAll('.invalid').length > 0) {
            alert('Password does not meet the requirements.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.find(u => u.email === email)) {
            alert('Email already registered');
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        window.location.href = 'index.html';
    });
});
