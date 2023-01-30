// //complete

            // for loops

for (let i = 1; i <= 10; i++){
    console.log(i);
}

for (let i = 10; i >= 1; i--){
    console.log(i);
}

            // while loops

{
let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

{
let i = 10;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}

            // do-while loops

{
let i = 1;
    do {
        console.log(i);
        i++;
    }
    while (i <= 10);
}

{
let i = 10;
    do {
        console.log(i);
        i--;
    }
    while (i >= 1);
}

            // for...of loop

const numbers = [1,2,3,4,5,6,7,8,9,10];
    for (let number of numbers) {
        console.log(number);
    }

            //Extended Challenge

const str = 'Hello!';
const padFront = ' '.repeat(4) + str;
console.log(padFront);