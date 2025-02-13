let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 5;
function checkGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  let message = document.getElementById("message");
  if (guessesLeft === 0) {
    message.textContent = "You're out of guesses! The number was " + randomNumber;
    document.getElementById("guessInput").disabled = true;
    document.getElementById("checkButton").disabled = true;
  } else if (guess === randomNumber) {
    message.textContent = "Congratulations! You guessed the number!";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("checkButton").disabled = true;
  } else if (guess < randomNumber) {
    guessesLeft--;
    message.textContent = "Too low! Guesses left: " + guessesLeft;
  } else {
    guessesLeft--;
    message.textContent = "Too high! Guesses left: " + guessesLeft;
  }
}