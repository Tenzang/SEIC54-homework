// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example


// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output
// cashRegister(cartForParty)); // 60.55


const cashRegister = function(cart) {

    const price = Object.values(cart);//Views the value of the arrays
    const floats = price.map(x => parseFloat(x));//Turned them all into number values
    let sum = 0 // need to store the values

    for(let i = 0; i < floats.length; i++) {
        sum += floats[i];
    }

    return sum;
}

console.log(cashRegister(cartForParty))