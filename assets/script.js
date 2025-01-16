const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(230, 310, 20, 20);
ctx.fillStyle = "hwb(0 100% 4%)";
ctx.fill();
ctx.closePath();
