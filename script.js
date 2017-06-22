
var guessedNum = parseInt(prompt('Guess a number between 1 to 10'))
var randomNum = randomFn(0,10)
var gameOver = false

function randomFn (min, max) {
return Math.floor(Math.random() * (max - min)) + min
 }

 //fn that checks numbers with the random number
 function askForANumber (guessedNum, randomNum) {
   if (guessedNum > randomNum) {
     //DOM insert h1 change 'wrong, try again' etc
   } else if (guessedNum < randomNum) {
      //DOM insert h1 change 'wrong, try again' etc
   } else if(guessedNum === randomNum) {
      //DOM insert h1 change 'correct' etc
     gameOver = true
   }
   checkForGameover()
 }

 function checkForGameover() {
   if(gameOver) {
     //DOM reveal restart button, function newGame()
   } else {
     guessedNum = parseInt(prompt('Type your number again!'))
     askForANumber(guessedNum, randomNum)
   }
 }

 //execute function
  askForANumber (guessedNum, randomNum)
  console.log(randomNum)

//DOM execute on clicking restart button
 function newGame(){
   guessedNum = parseInt(prompt('Guess a number between 1 to 10'))
   randomNum = randomFn(0,10)
   gameOver = false;
   askForANumber (guessedNum, randomNum)
 }
