// update the h1 to say higher or lower
// or if the number guess is correct, we change the body color

var randomNumber = randomFn(0, 10)
var guessedNum = prompt('The first guess: type your number!')
var isCorrect = false
var gameOver = false

// fn that generates randomNum
// min and max always whole number
// random number between min and max (exclusive)
function randomFn (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

// this fn. updates h1 text content
function updateH1(newH1) {
  var h1 = document.querySelector('h1')
  // var h1 = document.getElementsByTagName('h1')

  // updated the property of h1 dom node
  h1.textContent = newH1
}

// fn that checks numbers with the random number
function askForANumber (guessedNum, randomNumber) {
  if (guessedNum > randomNumber) {
    updateH1('lower, randomNumber is ' + randomNumber)
  } else if (guessedNum < randomNumber) {
    updateH1('higher, randomNumber is ' + randomNumber)
  } else if(guessedNum === randomNumber) {
    updateH1('correct')
    gameOver = true
  }
  checkForGameover()
}

askForANumber (guessedNum, randomNumber)

function newGame() {
  // setting randomNumber to 5 for easy checking
  askForANumber( guessedNum, 5 )
}

function checkForGameover() {
  if(gameOver) {
    alert('reveal the restart button now, stop the game')
  } else {
    guessedNum = prompt('Type your number again!')
    // bugs?!
    askForANumber(guessedNum, randomNumber)
  }
}

// bugs?!
// if(! gameOver) {
//
// }

var newGameButton = document.getElementById('newGameButton')

newGameButton.addEventListener("click", newGame)
