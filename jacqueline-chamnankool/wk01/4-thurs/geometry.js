//rectangle
const rectangleA = {
    length: 4,
    width: 4
};

function isSquare(rectangle) {
    if (rectangle.length === rectangle.width) {
        return true;
    } else {
        return false;
    }
}

function area(rectangle) {
    return rectangle.length * rectangle.width;
}

function perimeter(rectangle) {
    return (2 * rectangle.length) + (2 * rectangle.width);
}

console.log("-".repeat(50));
console.log(isSquare(rectangleA));
console.log(area(rectangleA));
console.log(perimeter(rectangleA));

//triangle
const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};
const triangleB = {
    sideA: 3,
    sideB: 3,
    sideC: 3
};
const triangleC = {
    sideA: 3,
    sideB: 2,
    sideC: 4
};

function isEquilateral(triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
        return true;
    } else {
        return false;
    }
}

function isIsosceles(triangle) {
    //two sides have the same length
    if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC) {
        return true;
    } else {
        return false;
    }
}

function areaTriangle(triangle) {
    //holy shit
    let s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    return Math.sqrt(s*((s*triangle.sideA)*(s*triangle.sideB)*(s*triangle.sideC))).toFixed(2);
}

function isObtuse(triangle) {
    let lengthArray = [triangle.sideA, triangle.sideB, triangle.sideC];
    //to ensure first two indices are of the shortest sides
    lengthArray = lengthArray.sort();

    //if a^2 + b^2 < c^2
    if (Math.pow(lengthArray[0],2)+Math.pow(lengthArray[1],2) < Math.pow(lengthArray[2],2)) {
        return true;
    } else {
        return false;
    }
}

console.log("-".repeat(50));
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log("-".repeat(50));

console.log(isIsosceles(triangleA));
console.log("-".repeat(50));

console.log(areaTriangle(triangleA));
console.log("-".repeat(50));

console.log(isObtuse(triangleC));
console.log("-".repeat(50));

//after these exercises i realize i hate triangles so much man
