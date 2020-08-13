const checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('change', () => {
    // WE CHANGE THE THEME OF THE SITE VIA TOGGLE
    document.body.classList.toggle('dark');
})