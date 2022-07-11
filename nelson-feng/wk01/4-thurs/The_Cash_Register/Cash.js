// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. 
// The object contains item names and prices (itemName: itemPrice). 
// The function should return the total price of the shopping cart.
// Example

const cartForParty = {  
banana: "1.25",
handkerchief: ".99",
Tshirt: "25.01",
apple: "0.60",
nalgene: "10.34",
proteinShake: "22.36"
};

const cashRegister = function (cart) {
  //Converts object values into an array of strings
  const cartArray = Object.values(cart);
  //Converts array of strings into an array of floats
  const floatCartArray = cartArray.map(x => parseFloat(x)); 
  // variable for arrays to add on each other
  let total = 0;
  //Loop to add each element of the array
  for(let i = 0; i < floatCartArray.length; i++) { 
  // Adding each element into total
    total += floatCartArray[i]; 
  }
  return(total);
}
console.log(cashRegister(cartForParty));