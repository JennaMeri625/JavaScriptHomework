

const prompt = require('prompt-sync')();

const characterName = prompt(`What is your name? `);

const wantsToPlay = prompt(`Welcome ${characterName}, would you like to place a bet? [y/n] `);

if (wantsToPlay === "n" || wantsToPlay === "N") {
	console.log('Ok, more wins for me!');
	process.exit();
}

let balance = 10;

if (balance > 0){
const betAmount = prompt(`How much would you like to bet? `)
}else {console.log(`I'm sorry, you do not have sufficient funds to continue.`);
        process.exit();
}

{let betAmount = prompt;
if (balance<betAmount){
    console.log(prompt(`I'm sorry, you do not have sufficient funds.  Enter another amount. `));
}else{
    let bet = null;
    do {
	bet = prompt("Heads or Tails? [H/T] ");
    }
    while(bet !== "t" && bet !== "T" && bet !== "h" && bet !== "H");
}
}

const flip = Math.random() < 0.5;

if (flip === true) {
	console.log('You win!');
} else {
	console.log('You lose!');
}

//  for (let balance = 10; balance >= betAmount; balance++){
//      function addBet (balance, betAmount){
//          if (flip === true){
//              return balance += betAmount;
//          }
//          else {
//              return function subBet (balance, betAmount){
//                  console.log(balance -= betAmount);
//               }
//          }
//      }
//  }
//  console.log (balance);