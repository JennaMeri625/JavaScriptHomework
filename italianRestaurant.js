const prompt = require('prompt-sync')();

let total = 0;


function askAboutPizza() {
    const pizza = prompt (`What size pizza would you like? `);
    if (pizza === `S`) {
        return {size: `S`, price: 5};
    }else if (pizza === `M`) {
        return {size: `M`, price: 6};
    }else if (pizza === `L`) {
        return {size: `L`, price: 7};
    }else {
        return `We have no other sizes.`
    };

}



function askAboutSalad() {
    const salad = prompt (`What size salad would you like? `);
    if (salad === `S`) {
        return {size: 'S', price: 2};
    }else if (salad === `L`) {
        return {size: 'L', price: 4};
    }else {
        return `We have no other sizes.`
    };
}


function askAboutDelivery() {
    const delivery = prompt (`Would you like delivery? `);
    if (delivery === `Yes`) {
        const address = prompt (`What is your address? `);
        return {addressProperty: address, price: 10}; 
    }else {
        return {addressProperty: null, price: 0}
    };
}

const order = prompt (`Would you like pizza, salad, and delivery? Yes/No `)
if (order === `Yes`) {
    
    total += askAboutPizza().price;
    
    total += askAboutSalad().price;
    
    total += askAboutDelivery().price;
}

console.log(`Your final bill is : $${total}`);


