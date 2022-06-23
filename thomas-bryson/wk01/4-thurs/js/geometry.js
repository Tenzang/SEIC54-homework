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
        const semiP = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2;
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

const cashRegister = function(shoppingList) {
    
}