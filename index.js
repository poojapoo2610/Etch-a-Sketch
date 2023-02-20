const drawCon = document.querySelector('.draw');
let containerDiv = document.querySelector('.container');
let pixels = 16;
let color = 'red';

function canvasSize() {
    pixels = parseInt(prompt('Enter the canvas size between 16-100'));
    while (pixels < 1 || pixels > 100 || !pixels) {
        pixels = parseInt(prompt('The scale must be from 16-100'));
    }
    resetCanvas();
}

function resetCanvas() {
    drawCon.removeChild(containerDiv);
    containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    drawCon.appendChild(containerDiv);
    createCanvas();
}

function createCanvas() {
    for (let i = 1; i <= `${pixels}`; i++) {
        const rowDiv = document.createElement('div');
        // console.log(rowDiv);
        rowDiv.classList.add('start', 'rowDiv');
        // console.log(rowDiv);
        containerDiv.appendChild(rowDiv);
        for (let j = 1; j <= `${pixels}`; j++) {
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('start', 'columnDiv');
            rowDiv.appendChild(columnDiv);
            columnDiv.addEventListener('mouseover', paint);
        }
    }
}

function paint(e) {
    console.log(e);
    e.target.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet');
    e.target.classList.add(`${color}`);
}


function changeColor() { 
    color = prompt(`Select any one color
            \nChoices: Red, Orange, Yellow, Green, Blue, Indigo, Violet`).toLowerCase();
    while (color !== 'red' && color !== 'orange' && color !== 'yellow' && color !== 'green' && color !== 'blue' && color !== 'indigo' && color !== 'violet') {
        color = prompt(`Please select only below colors
                \nChoices: Red, Orange, Yellow, Green, Blue, Indigo, Violet`).toLowerCase();
    }
}

function erase() {
    color = 'white';
}