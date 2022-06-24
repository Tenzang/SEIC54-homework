console.log('hey anyone there')

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

function cashRegister(cart) {
    let result = 0;
    for (const [item, price] of Object.entries(cart)){
        result += Number(price);
    }
    return result;
};

//test
// cashRegister(cartForParty)); // 60.55
console.log(cashRegister(cartForParty));