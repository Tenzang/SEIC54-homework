// Input
const cartForParty = {
  banana: "1.25", // console.log(cartForParty.banana)
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};
// Output
// 60.55

// function time

const cashRegister = function (shoppingCart) {
  let shoppingCartArr = Object.keys(shoppingCart); // shoppingCartArr = [banana, handkercheif, Tshirt, apple, nalgene, proteinshake]
  let sum = 0;

  for (let i = 0; i < shoppingCartArr.length; i++) {
    //this loop isn't looping and i'm getting the key not the value.

    let itemKey = shoppingCartArr[i];
    let itemKey = itemKey + shoppingCart[i]; // dot notation doesnt work here// itemKey = banana (etc) so we need shoppingCart to emulate the cartForParty.banana way of accessing the information // why isn't += working here??
  }
};
console.log(cashRegister(cartForParty));

