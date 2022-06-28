
const shoppingCart = {
    apple: 50,
    stick: 0.44,
    tissue: 40,
    watermelon: 14.2,
    shit: 55
};


const cashRegister = function(x){
    let sum = Object.values(x);
    let total = 0;
        for (let i = 0; i < sum.length; i++) {
            total += sum[i];
        }
        return total;
};


console.log(`-------------------------`);

console.log(cashRegister(shoppingCart));
