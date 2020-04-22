const canvas = document.querySelector('#gameCanvas');
const ctx = canvas.getContext('2d');

const ballColour = '#0095dd';

var xPosition = canvas.width / 2;
var yPosition = canvas.height - 30;

var xMovement = 2;
var yMovement = -2;

function ballSetup() {
    ctx.beginPath();
    ctx.arc(xPosition, yPosition, 10, 0, Math.PI*2);
    ctx.fillStyle = ballColour;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ballSetup();
    xPosition += xMovement;
    yPosition += yMovement;
}

setInterval(draw, 10);