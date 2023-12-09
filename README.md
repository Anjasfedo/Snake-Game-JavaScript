# Snake Game JavaScript

## Setting up HTML

1. firtstly ceate new folder and on it add new file name index.html
2. and write ! to build html template, and set the title
3. to run it we will use live server, we can install it on exstension
4. start it with Go Live buttton
5. lets now make new file name style.css and script.js
6. link the style.css and also script the script.js on head tag
7. and add defer atribute on script tag, so it will run after all html load
8. then inside body tag, add div, and div with class scores
9. in that div add h1 with id score and text 000
10. add more h1 with id highScore and text 000
11. that below scores div add new div with class game-border-1
12. and inside game-border-1 div wrap new div with class game-border-2
13. then wrap more div with class game-border-3
14. and add more div with id game-board
15. below of game-border-1 div, create h1 tag with id instruction-text and text Press spacebar to start the game
16. and under that add img with alt snake-logo and download snake logo to use it as src of image
17. the src will like snake-game-ai-gen.png
18. for next develop we need to comment the h1 and img tag below
19. so our code will like this: <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Snake Game</title>
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
</head>
<body>
<div>
<div class="scores">
<h1 id="score">00</h1>
<h1 id="highScore">00</h1>
</div>
<div class="game-border-1">
<div class="game-border-2">
<div class="game-border-3">
<div id="game-board">
</div>
</div>
</div>
</div>
<h1 id="instruction-text">Press spacebar to start the game</h1>
<img src="snake-game-ai-gen.png" alt="snake logo">
</div>
</body>
</html>

## Styling with CSS

1. lets start on style.css file, and open unspect mode
2. so create body selector then make it display flex, align item of center, justify content also center, height 100vh, margin of 0
3. we will add font family of google font with VT323, and use regular 400, and copy the link, copy it on head tag, and then we can copy and use the css rule of vt323
4. next we will target the body, .snake. on it add background color of dark gray
5. then target the #game-board with border radius 100px, display of grid, and grid template columns of repeat(20, 20px), for grid tempalte row also use repeat(20, 20px), also use margin of 5px
6. then we target .game-border-1 with border of some green solid 10px, border radius of 30px, as well box shadow of inset 0 0 0 10px and some green,
7. and copy all .game-border-1, use it on .game-border-2 and .game-border-3 , just change the border color and box shadow color, also less the border radius to 26px, 20px
8. for game border 2 use 8px of boder and for game borde 3 use 30px for border and 5px for box shadow
9. now for #instruction-text, add position of absolute, top of 60%, color of gray, width of 300px, text align with center, text transform to capialize, padding of 30px, and margin of 0
10. now target .scores, add display of flex, justify content to space-between
11. then target the #score, add color of some green
12. and target both of #score, #highScore with font size of 40px, font weight of bolder, and margin of 10px 0
13. now target only #highScore, with color some with green, display of none
14. then we target .game-border-3, #logo. add color somw brown
15. next target #snake, with border some gray 1px dotted
16. now target .food with backgroudn color with white, and border gray 5px solid
17. we need to add id of logo on img tag, then target it #logo then add position of absolute
18. so we will get this following css: body {
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
margin: 0;
font-family: 'VT323', monospace;
}

body,
.snake {
background-color: #414141;
}

#game-board {
border-radius: 100px;
display: grid;
grid-template-columns: repeat(20, 20px);
grid-template-rows: repeat(20, 20px);
margin: 5px;
}

.game-border-1 {
border: #595f43 solid 10px;
border-radius: 30px;
box-shadow: inset 0 0 0 10px #595f43;
}

.game-border-2 {
border: #abb78a solid 8px;
border-radius: 26px;
box-shadow: inset 0 0 0 10px #abb78a;
}

.game-border-3 {
border: #8b966c solid 30px;
border-radius: 20px;
box-shadow: inset 0 0 0 5px #8b966c;
}

#instruction-text {
position: absolute;
top: 65%;
color: #333;
width: 300px;
text-align: center;
text-transform: capitalize;
padding: 30px;
margin: 0;
}

.scores {
display: flex;
justify-content: space-between;
}

#score {
color: #abb78a;
}

#score,
#highScore {
font-size: 40px;
font-weight: bolder;
margin: 10px 0;
}

#highScore {
color: #d8ddca;
display: none;
}

.game-border-3,
#logo {
background-color: #c4cfa3;
}

.snake {
border: #5a5a5a 1px dotted;
}

.food {
background-color: #dedede;
border: #999 5px solid;
}

#logo {
position: absolute;
}

## Creating the snake game logic with JavaScript

1. start with open script.js, first we need to define HTML element
2. define const variable name board with dom get element id of game-board
3. and we create a function name draw, to draw game map, snake, and food
4. on draw function, we give board a innerHTML with empty string, to reset the board
5. then we call another function name drawSnake
6. so we can define drawSnake function, we draw our snake with array and object
7. also we need define some game variable
8. with a let variable name snake, with value array and object on it, with key x and y also value 10 of each key
9. back to drawSnake function, we take snake variable and do forEach, and for segment we do define a const variable name snakeElement with value createGameElement function, that pass div and snake. we give a div with snake class
10. so we define some function to create snake and food div
11. firstly we create new function name createGameElement with parameter tag and className
12. on that function define new const variabel name element with value dom create element and passing tag as argument
13. then we use element use className with value className
14. then we need to return the element
15. back to drawSnake function, add setPostition function with argument snakeElement and segment
16. and we define some function to set the position of snake or food
17. create new function name setPosition that take parameter element and position
18. we take element.style.gridColumn with value position.x
19. also we need add element.style.gridRow with value position.y
20. now back to drawSnake function, below setPosition, add board.appendChild passing snakeElement
21. next we define new function name drawFood. inside it we create const variable name foodElement with value createGameElement that passing argument div and food
22. below that add setPosition function that pass foodElement and food argument
23. back to define game variable, below of variable sneake
24. create let variable name food with value generateFood
25. then create generateFood function
26. back to drawFood, we need to add board.appendChild passing the foodElement
27. move on to generateFood function, create new const variable called x, with value Math.random() * 20,
28. back to game variable, define const variable name gridSize with value 20, and change the x on generateFood function to Math.floor(Math.random() * gridSize) + 1
29. and also add y with value same as x, and return { x, y }
30. back to drawFunction, add drawFood below drawSnake
31. next we gonna make the snake move, so create function called move
32. and create const variable name head with value { ...sneake[0] }
33. and we create conditional with switch below that
34. use direction on switch, before that back to game variable and devine a let variable name direction with value right
35. inside of switch case, we gonna make some case
36. if case right, add head.x++
37. for up, head.y--
38. if down, head.y++
39. and if left, head.x--
40. then below of switch, add snake.unshift(head)
41. after that we also take snake.pop
42. then we make the snake become bigger when hit the food
43. so we dont need to do pop, when the snake head coodinate is same as food coordinate
44. so we make if conditional, where if head.x === food.x && head.y === food.y, so we change food with value generateFood
45. below of food, add clearInterval(), to clear past interval
46. then add gameInterval, but we need to define new let variable on game variable called gameInterval with no value
47. so back to gameInterval, set it with setInterval with call back function with move(), checkCollision() and draw()
48. also give interval with variable name gameSpeedDelay. also define gameSpeedDelay variable on game variable with const and value 200
49. than create else statement, that will do snake.pop()
50. so we now create start game function
51. create new function name startGame, and alos create game variable let name gameStarted with value false
52. back to startGame function, we set gameStarted to true
53. then we need to define HTML element name instructionText with value dom get element by id instruction-text
54. also define logo with value dom get element by id logo
55. now back to startGame function, and add instructionText.style.display = "none”
56. same with logo add logo.style.display = “none"
57. then we set gameInterval with value setInterval and a callback function with move(), checkCollision() then draw()
58. and pass gameSpeedDelay as interval
59. now we will define keypress event listener
60. create new fucntion name handleKeyPress with parameter event
61. create conditional if, that if (!gameStarted && event.code === "Space") || (!gameStarted && event.code === " "), we gonna startGame()
62. and add else statement with switch case of event.key
63. if case is ArrowUp ww change direction to up, and break
64. and for case ArrowDown change to down
65. for case ArrowLeft change to left
66. and also case ArrowRight change to right
67. and below of handleKeyPress, add dom addEventListener of keydown, with callback function of handleKeyPress
68. but there is a bug, when we eat food, the snake will move faster
69. on every gameInterval set, add checkCollision() after move() too
70. back to move function, on if statement, below food call increateSpeed() function
71. under of addEventListener, add increaseSpeed function, create if statement, that gameSpeedSelay > 150 and decrease game delay by 5, gameSpeedDelay -= 5
72. on clearInterval pass gameSpeedDelay
73. back to increaseSpeed function, add else if statement where gameSpeedDelay > 100, do gameSpeedDelay -= 3
74. then add more else if for > 50 and >25, with -= 2 and -= 1
75. now we gonna make collision
76. create checkCollision function, and add const variable with value snake[0]
77. then create if statement that head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize. that for the wall collision. and do resetGame() function
78. also if snake hit snake it self
79. create for loop that let i = 1; i < snake.length; i++
80. so add if statement, that head.x === snake[i].x && head.y === snake[i].y, and also do resetGame() function
81. then we create resetGame function, that call snake with value [{ x: 10, y: 10}]
82. and call food with value generateFood
83. and also direction with value rigth
84. also gameSpeedDelay of 200
85. next create updateScore function, create const variable name currentScore with value snake.lenght - 1
86. back to define HTML element, add const variable name score with value dom get element by id score
87. and back to updateScore, add score.textContent with value currentScore.toString().padString(3, "0")
88. and back to draw function, and call updateScore() function
89. also for highScore, on resetGame function, on top of snake call updateHighScore() and stopGame() function
90. so first lets create stopGame function, and clearInterval(gameInterval)
91. then set the gameStarted = false,
92. and instructionText.style.display = "block" also same to logo.style.display = "block"
93. next create updateHighScore function, call new const variable name currentScore with value snake.length - 1
94. then add if statement that currentScore > highScore, do highScore = currentScore
95. because we dont have highScore, lets define it on HTML element
96. create const variable name highScoreText with value dom get element by id highScore
97. we also need to define highScore on game variable, with let variable and value of 0
98. back to updateHighScore function, on if statement, add highScoreText.textContent = highScore.toString().padstart(3, "0")
99. we need to unhide the highScoreText.style.display = "block"
100. because when the game done, the sometime the food still generated on start
101. to fixed it back to drawFood function, wrap the exist code with if statement when gameStarted is truthy
102. and the game is done