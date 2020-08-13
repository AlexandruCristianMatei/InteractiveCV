const arrowsRight = document.querySelectorAll('.arrow-right');

for (let i = 0; i < arrowsRight.length; i++) {
    arrowsRight[i].addEventListener('click', () => {
        const cube = document.querySelector('.cube');
        cube.className = `cube turn${i + 1}`;
    });
}

const arrowsLeft = document.querySelectorAll('.arrow-left');

for (let i = 0; i < arrowsLeft.length; i++) {
    arrowsLeft[i].addEventListener('click', () => {
        const cube = document.querySelector('.cube');
        cube.className = `cube return${i}`;
    });
}