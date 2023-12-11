const btnMenu = document.getElementById('btn-open-menu');
const menuIs = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
btnMenu.addEventListener('click', () => {
    menuIs.classList.add('menu-opened');
});

menuIs.addEventListener('click', () => {
    menuIs.classList.remove('menu-opened');
});
btnMenu.addEventListener('click', () => {
    menuIs.classList.add('menu-opened')
});

overlay.addEventListener('click', () => {
    menuIs.classList.remove('menu-opened')
});