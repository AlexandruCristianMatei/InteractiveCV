const menu = document.querySelector('.hamMenu');
menu.addEventListener('click', () => {
    const navBar = document.querySelector('nav');
    navBar.classList.toggle('activated');
});