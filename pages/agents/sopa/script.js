const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-toggle-close');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuClose.classList.toggle('active');
    menuToggle.classList.toggle('hidden');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    menuClose.classList.remove('active');
    menuToggle.classList.remove('hidden');
});