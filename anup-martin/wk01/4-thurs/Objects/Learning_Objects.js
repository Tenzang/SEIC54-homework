// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

const weeklyShopping = {
    fruits: "2.5",
    veggies: "1.76",
    proteinBar: "4.49",
    iceCreams: "3.99",
    yoghurt: "3.5"
};

const cashRegister = function(cart) {
    let totalPrice = 0;
    let values = Object.values(cart);

    console.log(values);

    for (i = 0; i < values.length; i++) {
        let x = Number(values[i]) // convert element to number//
        totalPrice += x;
        console.log(totalPrice);
    }
};
cashRegister(weeklyShopping);



// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
const rectangleA = {
    length: 4,
    width: 4
};
  
const isSquare = function( rectangle ){
    if (rectangle.length === rectangle.width) {
        return true;
    } else { 
        return false;
    }
};
console.log(isSquare(rectangleA));

//* area - Returns the area of the rectangle

const area = function( rectangle ) {
    return (rectangle.length * rectangle.width);
};
console.log(area( rectangleA ));

//perimeter - Returns the perimeter of the rectangle

const perimeter = function(rectangle){
    return ( rectangle.length + rectangle.width);
};
console.log(perimeter(rectangleA));

//### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
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
      sideA: 6,
      sideB: 4,
      sideC: 3
  };
  
  // * isEquilateral - Returns whether the triangle is equilateral or not
  
  const isEquilateral = function( triangle ){
    if ( triangle.sideA === triangle.sideB || triangleB === triangle.sideC) {
        return true
    } else {
        return false
    }
  };
console.log(`isEquilateral?`);
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isEquilateral(triangleC));

//isIsosceles - Returns whether the triangle is isosceles or not?

const isIsosceles = function( triangle ){
    if ( triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideC === triangle.sideA) {
        return true
    } else {
        return false
    }
};
console.log(`isIsosceles?`);
console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log(isIsosceles(triangleC));

// * area - Returns the area of the Triangle
const areaTriangle = function( triangle ){
    const a = triangle.sideA
    const b = triangle.sideB
    const c = triangle.sideC
    const s = (a + b + c )/2
    return (s*(s-a) (s-b) (s-c))**0.5
};
console.log(`areaTriangle`);
console.log(areaTriangle(triangleA));
console.log(areaTriangle(triangleB));
console.log(areaTriangle(triangleC));

// * isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function( triangle ){
    let sides = [triangle.sideA, triangle.sideB, triangle.sideC];
    let sortedSides = sides.sort();
    console.log(sortedSides);

    if ((sides[0]**2 + sides[1]**2) < side[3]){
        return true
    } else {
        return false
    }
};
console.log(`isObtuse?`);
console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));