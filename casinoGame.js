
const prompt = require('prompt-sync')();

const characterName = prompt(`What is your name? `);

let balance = 10;

let betAmount = 0;

do{
    wantsToPlay = prompt(`${characterName}, would you like to place a bet? [y/n] `);

    if (wantsToPlay === "n" || wantsToPlay === "N") {
	console.log('Ok, more wins for me!');
	process.exit();
    }


    if (balance > 0){
        betAmount = prompt(`How much would you like to bet? `)
    }else if (balance <= 0){
        console.log(`I'm sorry, you do not have sufficient funds to continue.`);
            process.exit();
    }

    if (balance<betAmount){
        prompt(`I'm sorry, you do not have sufficient funds.  Enter another amount. `);
    }

    let bet = null;

    do {
	    bet = prompt("Heads or Tails? [H/T] ");
    }   
        while(bet !== "t" && bet !== "T" && bet !== "h" && bet !== "H");

        const flip = Math.random() < 0.5;

        if (flip === true) {
	    console.log('You win!');
    } else {
	    console.log('You lose!');
    }

    {function addBet (balance, betAmount) {
        if (flip === true) {
            return balance + betAmount;
        }
    }
        console.log (addBet (balance + betAmount));
    }
    {function subBet (balance, betAmount) {
        if (flip !== true) {
            return balance - betAmount;
        }   
    }
        console.log (subBet (balance - betAmount));
    }
}
while(balance > 0);