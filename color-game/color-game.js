//declare variables 
var difficulty = 6; //6 for hard, 3 for easy mode 
var colorArr;
var pickedColour;
var squares = document.querySelectorAll(".square"); 
var colourDisplay = document.getElementById("colourDisplay"); 
var messageDisplay = document.getElementById("message"); 
var h1 = document.querySelector("h1"); 
var resetButton = document.getElementById("left-button"); 
var modeButtons = document.querySelectorAll(".mode"); 

//initialize the game
init(); 

function init() {
	setupModeButtons(); 
	setupSquares(); 
	reset(); 
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected"); 
			modeButtons[1].classList.remove("selected"); 
			this.classList.add("selected"); 
			this.textContent === "Easy" ? difficulty = 3: difficulty = 6; 
			reset(); 
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	 	//add eventListeners
	 	squares[i].addEventListener("click", function() {
			// alert(this.style.backgroundColor); 
			if (this.style.backgroundColor === pickedColour) {
				messageDisplay.textContent = "Correct!";  
				changeColours(squares); 
				h1.style.backgroundColor = pickedColour; 
				resetButton.textContent = "Play Again?"; 
			}
			else {
				this.style.backgroundColor = "#232323"; 
				messageDisplay.textContent = "Try Again";
				resetButton.textContent = "Try Again"; 
			}
		});
	 }
}


function reset() {
	//generate all new colours
	colorArr = randomColourGenerator(difficulty); 
	//pick random colour as winning colour
	pickColour(); 
	//assign squares proper colour
	for (var i = 0; i < squares.length; i++) {
		if (colorArr[i]) {
			squares[i].style.display = "block"; 
			squares[i].style.backgroundColor = colorArr[i]; 
		}
		else {
			squares[i].style.display = "none"; 
		}
		
	}
	//change background colour back to default
	h1.style.backgroundColor = "steelblue"; 

	//change text content of reset button back to original
	resetButton
.textContent = "New Colours";

	//delete textContent of messageDisplay
	messageDisplay.textContent = ""; 
}

//random color generator 
//Math.random() returns a Number value with positive sign, greater than or equal to 0 but less than 1
function randomColour() {
	var r = Math.floor((Math.random()*256));
 	var g = Math.floor((Math.random()*256)); 
 	var b = Math.floor((Math.random()*256)); 
 	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
 }

function randomColourGenerator(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColour());
	}
	console.log("arr: " + arr); 
	//return that array
	return arr;
}

//assign random colours to squares
// colorArr = randomColourGenerator(difficulty);  

 function pickColour() {
 	//must pick colour AFTER setting random colours
	pickedColour = colorArr[Math.floor((Math.random()*colorArr.length))]; 
	//change display to picked colour
	colourDisplay.textContent = pickedColour; 

 }

//must pick colour AFTER setting random colours
pickColour(); 

//change squares to correct colours when chosen correctly
function changeColours(colour) {
	for (var i = 0; i < colour.length; i++) {
		colour[i].style.backgroundColor = pickedColour; 
	}
}

//event listener for left button 
resetButton.addEventListener("click", function() {
	reset(); 
});

