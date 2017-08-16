// Global Variables
//========================================================================
// Arrays and variables for holding data
var wordOptions = ["chicago", "houston", "phoenix", "philadelphia", "dallas", "austin", "jacksonville", "indianapolis", "seattle", "denver"];

var selectedWord = "";

var lettersinWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetters = [];

// Game Counter

var winCount = 0;
var lossCount = 0;
var guessesCount = 9;

// Functions (Reusable blocks of code i will call upon when needed)
//========================================================================

function startGame() {

	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;


	// Reset

	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];


	// Populate blanks and successes with right number of blanks

	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}



	//Change HTML to reflect round conditions

	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;



	//Testing / Debugging
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);


}




function checkLetters(letter) {
// check if letter exists in code at all

	

	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
			
		}
	}

// check where in the word the letter exists, then populate out blanksAndSuccesses array.
	if(isLetterInWord) {

	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			blanksAndSuccesses[i] = letter;
			
		}
	}

}
//letter wasnt found	

else {
	wrongLetters.push(letter);
guessesLeft --
}
	//testing and debugging
	console.log(blanksAndSuccesses);

}
function roundComplete() {
	console.log("Win Count " + winCount + " | Loss Count: " + lossCount + " | Guesses left: " + guessesLeft);
	
//Update the html to reflect the recent count stats

document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");





//check if user won

if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
	winCount ++;
	alert("You Won!");

//update the win counter in the html

document.getElementById("winCounter").innerHTML = winCount;

startGame();

}
//check if user lost
else if (guessesLeft == 0) {

	lossCount ++;
	alert("You looser!");

// update html

document.getElementById("lossCounter").innerHTML = lossCount;
startGame();

}


}

// Main Process
//========================================================================

//initiates the code the first time
startGame();


//Register Key Clicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	//testing / debugging

	console.log(letterGuessed);

}












