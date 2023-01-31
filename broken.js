//complete needs 'npm install prompt-sync' package.json

const prompt = require('prompt-sync')();

const characterName = prompt("What is your name? ");
const wantsToPlay = prompt(`Welcome ${characterName}, would you like to play a game? [y/n] `);

if (wantsToPlay === "n" || wantsToPlay === "N") {
	console.log('Ok, more wins for me!');
	process.exit();
}

/*const guess = prompt("Heads or Tails? [H/T] ")*/

let guess = null;
do {
	guess = prompt("Heads or Tails? [H/T] ");
}
while(guess !== "t" && guess !== "T" && guess !== "h" && guess !== "H");


// this line is ok
const flip = Math.random() < 0.5;

if (flip === true) {
	console.log('You win!');
} else {
	console.log('You lose!');
}