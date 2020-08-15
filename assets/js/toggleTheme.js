const checkbox = document.querySelector('.checkbox');
const currentTheme = localStorage.getItem('data-theme', 'dark');

if (currentTheme) {
    document.body.classList.add('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        checkbox.checked = true;
    }
}

function switchTheme(event) {
    if (event.target.checked) {
        document.body.classList.add('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    } else {
        document.body.classList.remove('data-theme', 'dark');
        localStorage.setItem('data-theme', 'light');
    }
}

checkbox.addEventListener('change', switchTheme, false);