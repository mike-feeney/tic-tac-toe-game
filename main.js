document.querySelector('#tile1').addEventListener('click', addMark1);
document.querySelector('#tile2').addEventListener('click', addMark2);
document.querySelector('#tile3').addEventListener('click', addMark3);
document.querySelector('#tile4').addEventListener('click', addMark4);
document.querySelector('#tile5').addEventListener('click', addMark5);
document.querySelector('#tile5').addEventListener('click', addMark5);
document.querySelector('#tile6').addEventListener('click', addMark6);
document.querySelector('#tile7').addEventListener('click', addMark7);
document.querySelector('#tile8').addEventListener('click', addMark8);
document.querySelector('#tile9').addEventListener('click', addMark9);

let xSpaces = [];
let oSpaces = [];

function newGame() {
    document.location.reload(true)
}

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

function addMark1() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark1').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark1').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(1);
        }
        
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark1').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(1);
        }
        
    }

    checkForWin();
}

function addMark2() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark2').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark2').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(2);
        }
        
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark2').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(2);
        }
        
    }

    checkForWin();
}

function addMark3() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark3').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark3').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(3);
        }
        
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark3').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(3);
        }
        
    }

    checkForWin();
}

function addMark4() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark4').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark4').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(4);
        }
        
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark4').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(4);
        }
        
    }

    checkForWin();
}

function addMark5() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark5').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark5').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(5);
        }
        
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark5').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(5);
        }
        
    }

    checkForWin();
}

function addMark6() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark6').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark6').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(6);
        }
        
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark6').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(6);
        }
        
    }

    checkForWin();
}

function addMark7() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark7').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark7').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(7);
        }
        
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark7').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(7);
        }
        
    }

    checkForWin();
}

function addMark8() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark8').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark8').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(8);
        }
        
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark8').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(8);
        }
        
    }

    checkForWin();
}

function addMark9() {
    let turn = document.querySelector('h2').innerText
    let mark = document.querySelector('#mark9').innerText

    if (turn === "X's Turn") {
        if (mark === "") {
            document.querySelector('#mark9').innerText = 'X'
            document.querySelector('h2').innerText = "O's Turn"
            xSpaces.push(9);
        }
 
    }

    if (turn === "O's Turn") {
        if (mark === "") {
            document.querySelector('#mark9').innerText = 'O'
            document.querySelector('h2').innerText = "X's Turn"
            oSpaces.push(9);
        }
       
    }

    checkForWin();
}