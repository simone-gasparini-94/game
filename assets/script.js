const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 10;

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "hwb(0 100% 4%)";
    ctx.fill();
    ctx.closePath();
}

function moveUp() {
    if(y > radius) {
    y -= 10;
    drawBall();
    }
}

function moveDown() {
    if(y < canvas.height - radius) {
    y += 10;
    drawBall();
    }
}

function moveLeft() {
    if(x > radius) {
    x -= 10;
    drawBall();
    }
}

function moveRight() {
    if(x < canvas.width - radius) {
    x += 10;
    drawBall();
    }
}


drawBall();

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
