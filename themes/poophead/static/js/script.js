const before = document.querySelector('.hamburger::before');
const after = document.querySelector('.hamburger::after');
const hamburger = document.querySelector('.hamburger');
const toggle = document.getElementById('nav-toggle');

toggle.addEventListener('click', (e) => {
    hamburger.classList.toggle('turn');
})