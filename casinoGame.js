
const prompt = require('prompt-sync')();

const characterName = prompt(`What is your name? `);

function addBet (balance, betAmount) {
    return balance += betAmount;
}

function subBet (balance, betAmount) {
    return balance -= betAmount;  
}  

let balance = 10;

let betAmount = 0;

do {
    wantsToPlay = prompt(`${characterName}, would you like to place a bet? [y/n] `);

    if (wantsToPlay === "n" || wantsToPlay === "N") {
	console.log('Ok, see you next!');
	process.exit();
    }

    if (wantsToPlay === "y" || wantsToPlay === "Y") {
        console.log(`You have $${balance}`);
    } 
    
    if (balance > 0){
        betAmount = +prompt(`How much would you like to bet? `);
    }else if (balance <= 0){
        console.log(`I'm sorry, you do not have sufficient funds to continue.`);
            process.exit();
    }

    if (balance<betAmount){
       do {betAmount = +prompt(`I'm sorry, you do not have sufficient funds.  Enter another amount. `);
    }
    while (balance<betAmount);
}

    let bet = null;

    do {
	    bet = prompt("Heads or Tails? [H/T] ");
        }   
        while(bet !== "t" && bet !== "T" && bet !== "h" && bet !== "H");

        function flipCoin() {}
        const flip = Math.random() < 0.5 ? 'H' : 'T';

        if (flip === true) {
	    console.log(`You win $${betAmount}!`);
        } else {
	    console.log(`You lose $${betAmount}!`);
        }
        if (flip === true) {
            balance = addBet (balance, betAmount);
            console.log (`Your new balance is: $${balance}`);
        }else if (flip !== true) {
            balance = subBet(balance, betAmount);
            console.log (`Your new balance is: $${balance}`); 
        }    
    }
while(balance > 0);
