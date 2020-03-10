function randomRBG() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = 0

    return `rgb(${r}, ${g}, ${b})`
}

const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRBG();
    }
}, 650)