// This variable keeps track of whose turn it is.
let activePlayer = "X";
//This array stores an array o fmoves. we use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an x or o in a square
function placeXOrO(squareNumber)    {
    // this condition ensures a square hasn't been selected already.
    //The .come() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber)))   {
        // This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checked who's turn it is.
        if (activePlayer === "X")   {
            // If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x2.png")';
            // active player mey only be 'X' of 'O' so, if not 'X' it must be 'O'
        }  else {
            //If activePlayer is equal to 'O', the o.png is places in HTML
            select.style.backgroundImage = 'url("images/o2.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win condotions.
        checkWinConditions();
        //THis condition is for changing the active player.
        if (activePlayer === 'X')   {
            // If active player is 'X' change to 'O'
            activePlayer = 'O';
            // if active player is anything other than 'X'
        } else {
            // Change the activePlayer to 'X'
            activePlayer = 'X';
        }
        // This function plays placement sound.
        audio('media/place1.wav');
        //This condition checks to see if it is the computers turn.
        if (activePlayer === 'O')   {
            // This function disables clicking for computers turn.
            disableClick();
            //This funtion waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // Returning true is needed for our computersTurn() funtion to work.
        return true;
    }
    //This funtion results in a random square being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        // This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }
}

// THis function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on te screen if the condition is met.
function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(50, 50, 100, 558)}
    // X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 100, 558)}
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 500, 558)}
    // X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    // X 0, 4, 8 condition 
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
        // O 0, 1, 2 condition.
        else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
        // O 3, 4, 5 condition.
        else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
        // O 6, 7, 8 condition.
        else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
        // O 0, 3, 6 condition.
        else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(50, 50, 100, 558)}
        // O 1, 4, 7 condition
        else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 100, 558)}
        // O 2, 5, 8 condition
        else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 500, 558)}
        // O 6, 4, 2 condition
        else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
        // O 0, 4, 8 condition 
        else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    // this condition checks for a tie if none of the above conditions are met and
    // 9 squares are selected the code executes.
    else if (selectedSquares.length >=9)    {
        // this function plays the tie sound
        audio('./media/tie1.wav');
        // this function sets a .3 second timer before the resetGame is called
        setTimeout(function() {resetGame();}, 500);
    }
    // This function checks if an array includes 3 strings. It is used to check for 
    // each win condition
    function arrayIncludes(squareA, squareB, squareC)   {
        // these 3 variable will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // If the 3 variables we pass are all included in our array then
        // true is returned and out else if condition executes the drawLine() function
        if (a=== true && b === true && c === true) {return true;}

    }
}


// this function takes a string parameter of the path you set earlier for 
// placement sound('./media/place/mp3)
function audio(audioURL)    {
    // we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    // play method plays our audio sound
    audio.play();
}

// TGhis function utilizes HTML canvas to draw win lines
function drawWinLine(coodX1, coordY1, coordX2, coordY2) {
    // This line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    // this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    // This line indicates where the start of a lines x axis is
    let x1 = coodX1,
        // this line indicated where the start of lones y axis ius
        y1 = coordY1,
        // this line indicates where the end of line x axis is
        x2 = coordX2,
        // this line indicates where the end of lines y axis is
        y2 = coordY2, 
        // this is variable stores temporary x axis date we update in out animation loop
        x = x1, 
        // this variable stores temp y axis date we update in out animation loop
        y = y1;
    // this function interacts with the canvas
    function animateLineDrawing()   {
        // this variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // this method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        // this method starts a new path
        c.beginPath();
        // this method moves us to a starting point in our line
        c.moveTo(x1, y1);
        //this method indicates the end point in our line.
        c.lineTo(x, y);
        // this method sets the width of our line
        c.lineWidth = 10;
        // this will set the color of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        // this method draws everything we laid our above
        c.stroke();
        // this condition chacks if we've reached the endpoints .
        if (x1 <= x2 && y1 <= y2)   {
            // this condition adds 10 to the previous end x endpoint
            if (x < x2) {x+=10; }
            // this condition adds 10 to the previous end y endpoint.
            if (y < y2) {y+=10; }
            // this is similar to above 
            // this is necessary for the 6, 4, 2 win conditions.
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }
        // this condition is similar to theone above
        // this is neccessary for th e6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2)   {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    // this function clears our canvas after our win line is drawn
    function clear() {
        // this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        // this line clears out canvas
        c.clearRect(0, 0, 608, 608);
        // this line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }
    // this line disallows clicking while the win sound is playing
    disableClick();
    // this line plays the win sounds.
    audio('./media/winGame1.flac');
    // this line calls out main animation loop
    animateLineDrawing();
    // this line waits 1 second then clears canvas, resets game and allows clicking again
    setTimeout(function() { clear(); resetGame(); } , 1000);
}

// This function makes our body element temporarily unclickable.
function disableClick() {
    // This makesour body unclickable.
    body.style.pointerEvents = 'none';
    // this makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

// this function resets the game in the event of a tie or a win.
function resetGame() {
    // this for loop iterates through each html square element.
    for (let i = 0; i <9; i++)  {
        // this variable gets the HTML element i
        let square = document.getElementById(String(i));
        // this removes our elements backgroundImage
        square.style.backgroundImage = '';
    }
    // this resets our array so it is empty and we can start over
    selectedSquares = [];
}