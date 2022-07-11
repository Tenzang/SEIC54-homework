console.log(`poop`);

const rectangleA = {
    length: 4,
    width: 4
};

const rectangleB = {
    length: 7,
    width: 3
};

const isSquare = function(rectangle) {
    if (rectangle.length === rectangle.width) {
        return true;
    }
};

const areaRectangle = function(rectangle) {
    return rectangle.length * rectangle.width;
};

const perimeterRectangle = function(rectangle) {
    return (rectangle.length * 2) + (rectangle.width * 2);
};

console.log(isSquare(rectangleA));
console.log(areaRectangle(rectangleA));
console.log(perimeterRectangle(rectangleA));

const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 4
};

const triangleC = {
    sideA: 11,
    sideB: 4,
    sideC: 8
};

const isEquilateral = function(triangle) {
    if (triangle.sideA === triangle.sideB === triangle.sideC) {
        return true;
    } else {
        return false;
    }
};

const isIsosceles = function(triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC || triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB || triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA) {
        return true;
    } else {
        return false;
    }
};

// Heron's formula
const areaTriangle = function(triangle) {
    let s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    area = Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
    return area;
}

// If the sum of the squares of the two shorter sides of a triangle is smaller than the square of the longest side, the triangle is obtuse.
const isObtuse = function(triangle) {
    const sides = Object.values(triangle); // turns object values into an array
    const longestSideSquared = Math.max(...sides) ** 2;
    let sum = 0;
    for (let i = 0; i < sides.length; i++) {
        sum += (sides[i] ** 2);
    }        
    sum = sum - longestSideSquared;
    if (sum < longestSideSquared) {
        return true;
    } else {
        return false;
    }
}

console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(areaTriangle(triangleA));
console.log(isObtuse(triangleC));

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function(shoppingCartObject) {
    const newArray = Object.values(shoppingCartObject);
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
        sum += Number(newArray[i]);
    }
    return sum;
}

console.log(cashRegister(cartForParty));

/*
const validateCreditCard = function(cardNumber) {
    for (let i = 0; i < cardNumber.length; i++) {
        let sum = 0;
        sum += cardNumber[i];        
    }
    if (cardNumber.length === 15 && /^[0-9]+$/.test(cardNumber) === false && digitCount(cardNumber) >= 2 && cardNumber[cardNumber.length - 1] % 2 === 0 && sum > 16) {
        return true;
    } else {
        return false;
    }
}
*/

