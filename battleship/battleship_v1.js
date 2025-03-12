// declaring variable
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hit = 0;
var guesses = 0;

var isSunk = false;

// Game logic
while (isSunk == false) {
  guess = prompt('Ready!, Aim!, Fire! (enter number 1-6)');
  if (guess > 6 || guess < 1) {
    alert('Please enter a valid cell number!');
  } else {
    guesses += 1;

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
