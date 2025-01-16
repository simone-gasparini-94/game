const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: canvas.width / 2,
    y: canvas.height / 1.2,
    radius: 20,
    speed: 20,
    color: "black"
};

let obstacles = [
    { x: 100, y: 100, radius: 30, dx: 2, dy: 1, color: "grey" },
    { x: 400, y: 300, radius: 30, dx: -1, dy: -2, color: "grey" },
    { x: 600, y: 500, radius: 30, dx: 1.5, dy: 1.5, color: "grey" }
];

let gameOver = false;
let score = 0;

// Draw Player
function drawPlayer() {
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.closePath();
}

// Draw Obstacles
function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.beginPath();
        ctx.arc(obstacle.x, obstacle.y, obstacle.radius, 0, Math.PI * 2);
        ctx.fillStyle = obstacle.color;
        ctx.fill();
        ctx.closePath();
    });
}

// Move Player
function movePlayer(direction) {
    if (gameOver) return; // Stop moving if the game is over
    
    switch (direction) {
        case "up":
            if (player.y - player.radius > 0) player.y -= player.speed;
            break;
        case "down":
            if (player.y + player.radius < canvas.height) player.y += player.speed;
            break;
        case "left":
            if (player.x - player.radius > 0) player.x -= player.speed;
            break;
        case "right":
            if (player.x + player.radius < canvas.width) player.x += player.speed;
            break;
    }
}

// Move Obstacles
function moveObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.x += obstacle.dx;
        obstacle.y += obstacle.dy;

        // Bounce off the canvas edges
        if (obstacle.x + obstacle.radius > canvas.width || obstacle.x - obstacle.radius < 0) {
            obstacle.dx = -obstacle.dx; // Reverse horizontal direction
        }

        if (obstacle.y + obstacle.radius > canvas.height || obstacle.y - obstacle.radius < 0) {
            obstacle.dy = -obstacle.dy; // Reverse vertical direction
        }
    });
}

// Collision Detection
function checkCollision() {
    obstacles.forEach(obstacle => {
        let dx = player.x - obstacle.x;
        let dy = player.y - obstacle.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.radius + obstacle.radius) {
            gameOver = true;
        }
    });
}

// Draw Game Over
function drawGameOver() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Game Over!", canvas.width / 2 - 90, canvas.height / 2);
    ctx.fillStyle = "black";
    ctx.fillText("Press 'R' to Restart", canvas.width / 2 - 115, canvas.height / 2 + 40);
}

// Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    if (gameOver) {
        drawGameOver();
        return;
    }

    moveObstacles();
    checkCollision();
    drawPlayer();
    drawObstacles();

    // Increase score over time
    score += 1;
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 10, 30);

    requestAnimationFrame(gameLoop); // Repeat the loop
}

// Key Event Listener
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") movePlayer("up");
    if (event.key === "ArrowDown") movePlayer("down");
    if (event.key === "ArrowLeft") movePlayer("left");
    if (event.key === "ArrowRight") movePlayer("right");

    // Restart the game
    if (event.key === "r" || event.key === "R") {
        if (gameOver) {
            // Reset the game
            player.x = canvas.width / 2;
            player.y = canvas.height / 1.2;
            obstacles.forEach((obstacle, index) => {
                obstacle.x = Math.random() * canvas.width;
                obstacle.y = Math.random() * canvas.height;
                obstacle.dx = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1); // Random speed for x-axis
                obstacle.dy = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1); // Random speed for y-axis
            });
            gameOver = false;
            score = 0;
            gameLoop(); // Start the game again
        }
    }
});

// Start the game
gameLoop();