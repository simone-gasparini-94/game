const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = "hwb(0 100% 4%)";
    ctx.fill();
    ctx.closePath();
}
setInterval(drawBall, 10);

drawBall();
