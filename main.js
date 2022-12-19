// Add the event listeners to the board tiles listening for player clicks.  9 space board grid numbered as follows
// 1 2 3
// 4 5 6
// 7 8 9
document.querySelector('#tile1').addEventListener('click', addMark.bind(null,1));
document.querySelector('#tile2').addEventListener('click', addMark.bind(null,2));
document.querySelector('#tile3').addEventListener('click', addMark.bind(null,3));
document.querySelector('#tile4').addEventListener('click', addMark.bind(null,4));
document.querySelector('#tile5').addEventListener('click', addMark.bind(null,5));
document.querySelector('#tile6').addEventListener('click', addMark.bind(null,6));
document.querySelector('#tile7').addEventListener('click', addMark.bind(null,7));
document.querySelector('#tile8').addEventListener('click', addMark.bind(null,8));
document.querySelector('#tile9').addEventListener('click', addMark.bind(null,9));

// Arrays track which spaces each player controls
let xSpaces = [];
let oSpaces = [];

// Function to reload page when game is completed so players can play again.
function newGame() {
    document.location.reload(true)
}

// Checks the spaces each player controls after each turn to see if an win has been acheived
function checkForWin() {
    if ( (xSpaces.includes(1) && xSpaces.includes(2) && xSpaces.includes(3)) 
        || (xSpaces.includes(4) && xSpaces.includes(5) && xSpaces.includes(6))
        || (xSpaces.includes(7) && xSpaces.includes(8) && xSpaces.includes(9))
        || (xSpaces.includes(1) && xSpaces.includes(4) && xSpaces.includes(7))
        || (xSpaces.includes(2) && xSpaces.includes(5) && xSpaces.includes(8))
        || (xSpaces.includes(3) && xSpaces.includes(6) && xSpaces.includes(9))
        || (xSpaces.includes(1) && xSpaces.includes(5) && xSpaces.includes(9))
        || (xSpaces.includes(7) && xSpaces.includes(5) && xSpaces.includes(3)) ) {
        document.querySelector('h2').innerText = 'X Wins!'
        document.querySelector('h1').innerText = 'New Game'
        document.querySelector('h1').addEventListener('click', newGame)
    }else if ( (oSpaces.includes(1) && oSpaces.includes(2) && oSpaces.includes(3))
              || (oSpaces.includes(4) && oSpaces.includes(5) && oSpaces.includes(6))
              || (oSpaces.includes(7) && oSpaces.includes(8) && oSpaces.includes(9))
              || (oSpaces.includes(1) && oSpaces.includes(4) && oSpaces.includes(7))
              || (oSpaces.includes(2) && oSpaces.includes(5) && oSpaces.includes(8))
              || (oSpaces.includes(3) && oSpaces.includes(6) && oSpaces.includes(9))
              || (oSpaces.includes(1) && oSpaces.includes(5) && oSpaces.includes(9))
              || (oSpaces.includes(7) && oSpaces.includes(5) && oSpaces.includes(3)) ) {
        document.querySelector('h2').innerText = 'O Wins!'
        document.querySelector('h1').innerText = 'New Game'
        document.querySelector('h1').addEventListener('click', newGame)
    }else if (oSpaces.length + xSpaces.length === 9 ) {
        document.querySelector('h2').innerText = 'Tie!'
        document.querySelector('h1').innerText = 'New Game'
        document.querySelector('h1').addEventListener('click', newGame)
    }
}

// Marks tiles on player clicks and adds that tile to the array of spaces the player controls, then checks to see if player has won
function addMark(tileNum) {
    let turn = document.querySelector('h2').innerText;
    let mark = document.querySelector(`#mark${tileNum}`).innerText;

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector(`#mark${tileNum}`).innerText = 'X';
            document.querySelector('h2').innerText = "O's Turn";
            xSpaces.push(tileNum);
        }
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector(`#mark${tileNum}`).innerText = 'O';
            document.querySelector('h2').innerText = "X's Turn";
            oSpaces.push(tileNum);
        }
    }

    checkForWin();
}