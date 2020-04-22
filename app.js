const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext('2d');

const ballColour = '#0095dd';

function draw() {
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI*2);
    ctx.fillStyle = ballColour;
    ctx.fill();
    ctx.closePath();
}

setInterval(draw, 10);