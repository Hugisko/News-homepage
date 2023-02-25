const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    nav.classList.toggle('active');
});