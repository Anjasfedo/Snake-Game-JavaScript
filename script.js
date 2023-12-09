// HTML Element
const board = document.getElementById("board-game");
const instructionText = document.getElementById("instruction-text");
const logo = document.getElementById("logo");
const score = document.getElementById("score");
const highScoreText = document.getElementById("highScore");

// Game Variabels
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
const GRIDSIZE = 20;
let direction = "right";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
let highScore = 0;

// Function
const draw = () => {
  board.innerHTML = "";
  drawSnake();
  drawFood();
  updateScore();
};

const drawSnake = () => {
  snake.forEach((segment) => {
    const snakeElement = createElement("div", "snake");
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
};

const createGameElement = (tag, className) => {
  const element = createElement(tag);
  element.className = className;
  return element;
};

const setPosition = (element, position) => {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
};

const drawFood = () => {
  if (gameStarted) {
    const foodElement = createElement("div", "food");
    setPosition(foodElement, food);
    board.appendChild(foodElement);
  }
};

const generateFood = () => {
    const x = Math.floor(Math.random() * GRIDSIZE) + 1;
    const y = Math.floor(Math.random() * GRIDSIZE) + 1;
    return { x, y };
  };

const move = () => {
  const head = { ...snake[0] };
  switch (direction) {
    case "right":
      head.x++;
      break;
    case "left":
      head.x--;
      break;
    case "down":
      head.y++;
      break;
    case "up":
      head.y--;
      break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
    increaseSpeed();
    clearInterval(gameSpeedDelay);
    gameInterval = setInterval(() => {
      move();
      checkCollision();
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
};

const startGame = () => {
  gameStarted = true;
  instructionText.style.display = "none";
  logo.style.display = "none";
  gameInterval = setInterval(() => {
    move();
    checkCollision();
    draw();
  }, gameSpeedDelay);
};

const handleKeyPress = (event) => {
  if (
    (!gameStarted && event.code === "Space") ||
    (!gameStarted && event.code === " ")
  ) {
    startGame();
  } else {
    switch (event.key) {
      case "ArrowRight":
        direction = "right";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowUp":
        direction = "up";
        break;
    }
  }
};

document.addEventListener("keydown", handleKeyPress);

const increaseSpeed = () => {
  if (gameSpeedDelay > 150) {
    gameSpeedDelay -= 5;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay -= 3;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay -= 2;
  } else if (gameSpeedDelay > 25) {
    gameSpeedDelay -= 1;
  }
};

const checkCollision = () => {
  const head = snake[0];

  if (head.x < 1 || head.x > GRIDSIZE || head.y < 1 || head.y > GRIDSIZE) {
    resetGame();
  }

  for (let i = 0; i < snake.length - 1; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
};

const resetGame = () => {
  updateHighScore();
  stopGame();
  snake = [{ x: 10, y: 10 }];
  food = generateFood();
  direction = "right";
  gameSpeedDelay = 200;
};

const updateScore = () => {
  const currentScore = snake.length - 1;
  score.textContent = currentScore.toString().padStart(3, "0");
};

const stopGame = () => {
  clearInterval(gameInterval);
  gameStarted = false;
  instructionText.style.display = "block";
  logo.style.display = "block";
};

const updateHighScore = () => {
  const currentScore = snake.length - 1;
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreText.textContent = highScore.toString().padStart(3, "0");
  }

  highScore.style.display = "block";
};
