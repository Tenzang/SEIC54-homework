///Geometry

///### Part 1, Rectangle

const rectangleA = {
    length: 4,
    width: 4
  };

const isSquare = function(dimensions) {
    if (rectangleA.length === rectangleA.width) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isSquare(rectangleA));

const area = function(dimensions) {
    totalArea = rectangleA.length * rectangleA.width;
    return totalArea;
}

console.log(area(rectangleA));

const perimeter = function(diensions) {
    totalPerimeter = rectangleA.length + rectangleA.width;
    return totalPerimeter;
}

console.log(perimeter(rectangleA));

///### Part 2, Triangle

const triangleA = {
    sideA: 4,
    sideB: 5,
    sideC: 6
  };

///Equilateral Triangle

const isEquilateral = function(triDimensions) {
    if (triangleA.sideA === triangleA.sideB && triangleA.sideA === triangleA.sideC) {
        return true;
    } else {
        return false;
    }
}

///Isosceles Triangle

console.log(isEquilateral(triangleA));

const isIsosceles = function(triDimensions) {
    if ((triangleA.sideA === triangleA.sideB && triangleA.sideA !== triangleA.sideC) || (triangleA.sideA === triangleA.sideC && triangleA.sideA !== triangleA.sideB) || (triangleA.sideB === triangleA.sideC && triangleA.sideA !== triangleA.sideC)) {
        return true;
    } else {
        return false;
    }
}

console.log(isIsosceles(triangleA));

///Area of a triangle

const areaOfTri = function(triDimensions) {
          //Calculation of the semiperimeter
        const semiP = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2;
          //Calculation of the area from formula
        const areaTriangle = Math.sqrt(semiP * (semiP - triangleA.sideA) * (semiP-triangleA.sideB) * (semiP - triangleA.sideC));
        return areaTriangle;
    }
 
console.log(areaOfTri(triangleA));


////Obtuse Triangle

const isObtuse = function(triDimensions) {
    if (isIsosceles(triDimensions) === true || isEquilateral(triDimensions) === true) {
        return false;
    } else {
        return true;
    }
}
console.log(isObtuse(triangleA));

//# The Cash Register

//Total cart
const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };

  //Here I am converting the values of the object into an array, and using a for loop to run through the array to sum the components. The parseFloat method converts the strings to floats for an accurate sum.

const cashRegister = function(sl) {
    const valuesParty = Object.values(cartForParty);
    let sumArray = 0;
        for (let i = 0; i < valuesParty.length; i++) {
            sumArray += parseFloat(valuesParty[i]);
        }
    return (`Your total is $${ sumArray }.`);
}
console.log(cashRegister(cartForParty));



//Credit Card Validation
//

const validateCreditCard = function(validate) {
    const intArr = Array.from(Number(validate), validateCreditCard);
    // if (intArr.length < 16) {
    //     return false;
    // } else {
    //     return true;
    // }
    return intArr;
}
console.log(validateCreditCard(9999-9999-9999-9998));



