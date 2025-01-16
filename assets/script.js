const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let xPlayer = canvas.width / 2;
let yPlayer = canvas.height / 1.2;
let radiusPlayer = 10;

let xCircle = canvas.width / 1.4;
let yCircle = canvas.height / 3.5;
let radiusCircle = 40;

function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(xPlayer, yPlayer, radiusPlayer, 0, Math.PI * 2);
    ctx.fillStyle = "hwb(0 100% 4%)";
    ctx.fill();
    ctx.closePath();
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(xCircle, yCircle, radiusCircle, 0, Math.PI * 2);
    ctx.strokeStyle = "hwb(0 100% 4%)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}


function moveUp() {
    if(yPlayer > radiusPlayer) {
    yPlayer -= 16;
    draw();
    }
}

function moveDown() {
    if(yPlayer < canvas.height - radiusPlayer) {
    yPlayer += 16;
    draw();
    }
}

function moveLeft() {
    if(xPlayer > radiusPlayer) {
    xPlayer -= 16;
    draw();
    }
}

function moveRight() {
    if(xPlayer < canvas.width - radiusPlayer) {
    xPlayer += 16;
    draw();
    }
}

function draw() { 
    drawPlayer();
    drawCircle();
}

draw();


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        moveUp();
    } else if (event.key === "ArrowDown") {
        moveDown();
    } else if (event.key === "ArrowLeft") {
        moveLeft();
    } else if (event.key === "ArrowRight") {
        moveRight();
    }
})


