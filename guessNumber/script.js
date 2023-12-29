const secretNumber = Math.floor(Math.random() * 10) + 1;
let remainingHearts = 4;

function checkGuess() {
  const guessInput = document.getElementById('guessInput');

  if (guessInput.value === '') {
    alert('Please enter a number!');
    return;
  }
  const userGuess = parseInt(guessInput.value, 10);

  if (userGuess === secretNumber) {
    document.querySelector('h2').innerText=" 🥳 Congratulations! You guessed the correct number 🎉";

  } else {
    document.querySelector('h2').innerText=' 😔 Wrong guess.💔Try again!';
    removeHeart();
  }

  guessInput.value = '';
}

function removeHeart() {
  remainingHearts--;

  // Update the hearts display
  document.getElementById('hearts').innerHTML = '♥ '.repeat(remainingHearts);

  if (remainingHearts === 0) {
    gameOver();
  }
}

function gameOver() {
    document.querySelector('h2').innerText=`Game over. You ran out of hearts. The correct number was ' + ${secretNumber}`;
  // You can add additional logic here for restarting the game.
}

