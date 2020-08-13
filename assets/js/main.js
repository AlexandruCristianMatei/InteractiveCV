const checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('change', () => {
    // WE CHANGE THE THEME OF THE SITE VIA TOGGLE
    document.body.classList.toggle('dark');
});

const menu = document.querySelector('.hamMenu');
menu.addEventListener('click', () => {
    const navBar = document.querySelector('nav');
    navBar.classList.toggle('activated');
});