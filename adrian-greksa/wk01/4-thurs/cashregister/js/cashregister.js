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

// // Output
// cashRegister(cartForParty)); // 60.55

const cashRegister = function (cart) {
    let totalPrice = 0;
    let values = Object.values(cart);

    console.log(values);

    for (i = 0; i < values.length; i++) {
        let x = Number(values[i]) // convert element to number
        totalPrice += x; 
    }
    console.log(totalPrice);
}
cashRegister(cartForParty); // 60.55

