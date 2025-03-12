// declaring variable
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hit = 0;
var guesses = 0;
let guessedNumbers = [];

var isSunk = false;

// Game logic
while (isSunk == false) {
  guess = prompt('Ready!, Aim!, Fire! (enter number 0-6)');
  if (guess > 6 || guess < 1) {
    alert('Please enter a valid cell number!');
  } else if (guessedNumbers.includes(guess)) {
    alert('Pick another number');
  } else {
    guesses += 1;
    guessedNumbers.push(guess);

    if (guess == location1 || guess == location2 || guess == location3) {
      alert('HIT!!');
      hit += 1;

      if (hit == 3) {
        isSunk = true;
        alert('You sank my battleship!🛳️');
      }
    } else {
      alert('Miss!!');
    }
  }
}

var stats =
  'You sank my battleship at: ' +
  guesses +
  'guesses' +
  'and your accuracy is: ' +
  3 / guesses;

alert(stats);
