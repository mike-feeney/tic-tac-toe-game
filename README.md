# Tic-Tac-Toe-Game: <a href="https://mike-feeney.github.io/tic-tac-toe-game/" target="_blank">Play Here</a>

A simple two player game of tic-tac-toe that can be played in the browser.

## Tech used: ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5)![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3)![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript)

My goal for this project was to make an attractive looking game of multiplayer tic-tac-toe with as little code as possible. 

I tracked player moves by numbering the tic-tac-toe grid spaces 1 through 9 and stored the spaces each player controlled in an array. At the end of each turn, player's spaces are checked against the possible win conditions. If neither player wins, the game is declared a tie. 

At the end of each game the heading becomes a button that players can click to start a new game.

## Optimizations

Some possible improvements include
- Add score counter to count wins for each player
- Add different color schemes the user can choose from
- Esure mobile compatibility
- Add animation to new game button to make it stand out 

## Lessons Learned:

I learned how to use the .bind() method to pass parameters into a function in an event listener without immediately calling the function on page load. 

The addMark() function handles putting an X or O in a space on the board and then marks that space as being under a player's control. Initially I tried to pass a number representing each space into the the addMark() function in the event listener. This called the function on page load and caused an error. 

I tried to work around this by creating an addMark() function for each space which resulted in a siginficant amount of code duplication (9 functions, one for each space on the grid). 

By using addMark.bind() I was able to avoid calling the function immediately and could pass in a number representing each space. This eliminated 8 reduntant functions in the program.
