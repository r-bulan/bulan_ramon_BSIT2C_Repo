// Random Locations
var randomLoc = Math.floor(Math.random() * 5);
var shipLocation = [randomLoc, randomLoc + 1, randomLoc + 2];

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

// Game Logic
while (isSunk == false) {
  guess = prompt('Ready!, Aim!, Fire! 🎯 (Enter Number 0-6)');

  if (guess == null) {
    alert('Next Time I guess.');
    break;
  }

  // Convert input to a number base 10
  guess = parseInt(guess, 10);

  // Skip the code
  if (isNaN(guess) || guess < 0 || guess > 6) {
    alert('Please Enter a Valid Number (0 - 6!)');
    continue;
  }

  guesses++;

  const hitIndex = shipLocation.indexOf(guess);

  if (hitIndex !== -1) {
    // -1 means not found
    alert('Hit!');
    shipLocation.splice(hitIndex, 1); //Splice removes an element from an array
    hits++;
    if (shipLocation.length === 0) {
      isSunk = true;
      alert('Ship is successfully sunk');
    }
  } else {
    alert('Miss!');
  }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

var stats =
  'You took ' +
  guesses +
  ' guesses to sink the battleship! ' +
  '\n' +
  'Accuracy: ' +
  accuracy +
  '%';

alert(stats);
