
let activePlayer = "X";
let selectedSquares = [];


//Placing X or O on a square. It checks if a square is available, updates the UI, checks for wins, and then turn transition to and from the computer.

function placeXOrO(squareNumber) {
    // This condition ensures a square can't be clicked twice
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);

        if (activePlayer === "X") {
            select.style.backgroundImage = "url('images/newXSmall.png')";
        } else {
            select.style.backgroundImage = "url('images/newOSmall.png')";
        }

        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions();
        // set the current player
        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }

        audio("media/place.wav");

        if (activePlayer === "O") {
            disableClick();
            setTimeout(function () { computerTurn(); }, 1000);
        }

        return true;
    }
    
   
//Logic for the computer's turn. Chooses a random number that corelates to a square on the board, then attempts to place an 'O' until it finds a valid move.

    function computerTurn() {
        let success = false;
        let pickASquare;

        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));

            // is the second calling of the placeXOrO(pickASquare) needed inside the loop? that seemed like a typo?
            if (placeXOrO(pickASquare)) {
                success = true;
            }
        }
    }
}

// Scans the selectedSquares array for any of the 8 possible winning groups of moves. If someone won the game, this calls the drawing function for the win line.
function checkWinConditions() {
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }//
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }//
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }

    else if (selectedSquares.length >= 9) {
        audio("media/gameOver.wav");
        setTimeout(function () { resetGame(); }, 500);
    }
}

// Checks if the selectedSquares array -- list of moves taken -- contains any of the winning patterns
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);

    if (a === true && b === true && c === true) {
        return true;
    }
}

//Temporarily disables the user from clicking on the board to prevent the user from clicking while the computer is selecting a valid move
function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000);
}

// Creates an audio player, then gets the audio for the player 
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// takes the coordinates of the winning group, and then animates a green line across the winning board cells
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines");
    const ctx = canvas.getContext("2d");

    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    // Actually animatesthe winning line drawing. It uses requestAnimationFrame to redraw the line frame-by-frame until the end coordinates from the drawLine call are reached
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        ctx.clearRect(0, 0, 608, 608);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x, y);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "rgba(70, 255, 33, 0.8)";
        ctx.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y < y2) {
                y += 10;
            }
            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y < y2) {
                y += 10;
            }
            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }

        }
    }

    // Removes the images drawn on the board after the win animation is done. It ensures the image of the board is empty
    function clear() {
        const animationLoop = requestAnimationFrame(clear);

        ctx.clearRect(1, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();

    audio("media/win.wav")

    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);

}

// Sets all of the background images for the board cells to null, and clears the selectedSquares array to start a new game
function resetGame(){
    for (let i = 0; i < 9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}