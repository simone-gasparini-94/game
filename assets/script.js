const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;


function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "hwb(0 100% 4%)";
    ctx.fill();
    ctx.closePath();
}

function moveUp() {
    y -= 4;
    drawBall();
}

function moveDown() {
    y += 4;
    drawBall();
}

function moveLeft() {
    x -= 4;
    drawBall();
}

function moveRight() {
    x += 4;
    drawBall();
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
