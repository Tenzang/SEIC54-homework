
//----------------Part 1, Rectangle--------------

const shape1 = {
    length: 4,
    width: 4
};

const shape2 = {
    length: 5,
    width: 4
};

const isSquare = function(x){ 
    if (x.length === x.width) {
        return `its is square`;
    } else {
        return `its is rectangle`;
    }
} //this function returns if its a square/rectangle

const area = function(x){
    const total = x.length * x.width;
    return total;
} //Returns area of shape

const perimeter = function(x) {
    const total = (x.length * 2) + (x.width * 2);
    return total;
} //Returns perimeter of shape


//----------------Part 2, Triangle--------------

const triangle1 = {
    side1: 3,
    side2: 4,
    side3: 5
};

const triangle2 = {
    side1: 3,
    side2: 3,
    side3: 3
};

const triangle3 = {
    side1: 3,
    side2: 3,
    side3: 4
};

const isEquilateral = function(x) {
    if (x.side1 === x.side2 && x.side1 === x.side3) {
        return `its an equilateral triange`;
    } else {
        return `its not... try again`;
    }
}

const isIsosceles = function(x) {
    let pMessage = `its an isosceles triange`;
    if (x.side1 === x.side2 && x.side1 !== x.side3) {
        return pMessage;
    } else if (x.side2 === x.side3 && x.side2 !== x.side1) {
        return pMessage;
    } else if (x.side1 === x.side3 && x.side1 !== x.side2) {
        return pMessage;
    } else {
        return `sorry not an iso`;
    }
}

const areaTriangle = function(x) {
    let total = (x.side1 + x.side2 + x.side3) / 2;
    let totalArea = Math.sqrt(total * (total - x.side1) * (total - x.side2) * (total - x.side3));
    return totalArea;
}

const isObtuse = function(x) {
    let pMessage = `its an obtuse triange`;
    if (x.side1 !== x.side2 && x.side1 !== x.side3 && x.side3 !== x.side2) {
        return pMessage;
    } else {
        return `sorry not an obtuse`;
    }
}

