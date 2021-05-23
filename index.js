//Game constants & variables
let direction = {x: 0, y: 0};
const foodsound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y:15}
]

// Game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime);
   if((ctime - lastPaintTime)/1000 <1/speed) {
       return;
   }
   lastPaintTime = ctime;
   gameEngine();
}

function gameEngine() {
    // Updating the snake array & food
    // Display the snake & food
    board.innerHTML = "";
    
}

// Main Logic
window.requestAnimationFrame(main);