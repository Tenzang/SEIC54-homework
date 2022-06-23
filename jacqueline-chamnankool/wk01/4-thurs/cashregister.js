const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

function cashRegister(cart) {
    let total = 0;

    for (const [item, price] of Object.entries(cart)) {
        total += Number(price);
    }

    return total;
}

console.log("Total:", cashRegister(cartForParty));
