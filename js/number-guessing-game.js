function runGame() {
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
    const target = Math.floor(Math.random() * 100) + 1;

    do {
        guessString = prompt("I am thinking of a number between 1 and 100.\n\nWhat is the number?");
        if (guessString === null) {
            return;
        }
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert("You have guessed correctly! The number was " + target + ".\n\nIt took you " + numTries + " tries to guess correctly.");
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert("You have not entered a number.\n\nPlease enter a number between 1 and 100.");
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("Please enter an integer between 1 and 100.");
    } else if (guessNumber > target) {
        alert("Your number is too high. Try again.");
    } else if (guessNumber < target) {
        alert("Your number is too low. Try again.");
    } else {
        correct = true;
    }
    return correct;
}