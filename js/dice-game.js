function rollDice() {
    let goldCoins = 0;
    for(let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert("Your roll was " + roll + ".");
        if (roll === 1) {
            alert("Game over! No more rolls!");
            break;
        }
        if (roll === 4) {
            goldCoins - 1;
        }
        if (roll < 5) {
            continue;
        } 
        goldCoins += roll;
        alert("Congratulations! You win " + roll + " gold coins!\n\nYou have won a total of " + goldCoins + " gold coins so far.");

    }
    alert("You have won a total of " + goldCoins + " gold coins!");
}