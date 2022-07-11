// Given the following a rectangle object like the one below, 
// write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA= {
    length: 8,
    width: 90,
};

const isSquare=function(rectangle){
    if (rectangle.length===rectangle.width){
        console.log(`you got the square`);
    }else{
        console.log(`not a square`);
    }
}

isSquare(rectangleA);


const area=function(rectangle){
    return  (rectangle.length*rectangle.width);  

        
}
console.log(`thats the area`);
area(rectangleA);

const perimeter=function(rectangle){
    return ((2*rectangle.length)+(2*rectangle.length));
    
}
console.log(`PERIMETER`);
perimeter(rectangleA);

// Given the following a triangle object like the one below, 
// write the following functions which accept a triangle object as an argument:

const triangleA = {
    sideA: 4,
    sideB: 3,
    sideC: 5
  };

  // isEquilateral - Returns whether the triangle is equilateral or not  () K = (1/4) * √3 * a2.)


const isEquilateral = function (triangle){

    if( triangle.sideA === triangle.sideB && triangle.sideC === triangle.sideA ){
        return `it is a Equilateral `;
    }else{
        retern `its not equilateral`;
    }

}

console.log( isEquilateral(triangleA));

// isIsosceles - Returns whether the triangle is isosceles or not
// X = Y or X = Z or Y = Z

const isIsosceles = function ( triangle){

    if ( triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideC === triangle.sideA){
        return `triangle is isosceles`;
    }else {
        return `its not isosceles`;
    }
}
console.log ( isIsosceles ( triangleA));

//// area - Returns the area of the Triangle
const areaTriangle = function ( triangle ){
     const semiPerameter = ( triangle.sidea + triangle.sideB + triangle.sideC )/2;                 //a+b+c/2
     const area = Math.square  (semiPerameter * (semiPerameter - triangle.sideA)*(semiPerameter - triangle.sideB )*(semiPerameter - triangle.sideC));                    //sqrt s(s-a)(s-b)(s-c)
     
     return `Area of triangle is ${area}`;
}
console.log(areaTriangle(triangleA) );


// isObtuse - Returns whether the triangle is obtuse or not
X^2+Y^2<Z^2

const isObtuse = function (triangle){

    if ( triangle.sideC * triangle.sideC > ((triangle.sideA * triangle.sideA) + (triangle.sideB * triangle.sideB))){
        return `this trinagle is Obtuse`;
    }else{ 
        `this triangle is not Obtuse `;
    }
}

// Write a function called cashRegister that takes a shopping cart object. 
// The object contains item names and prices (itemName: itemPrice). 
// The function should return the total price of the shopping cart.
// Example


const cartForParty = {  
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
   };
  
   let val=Object.values(cartForParty)
  
    const cashRegister = function(arr){
    let sum = 0
         for(let i=0;i<arr.length;i++){
              
            sum += arr[i];
  
          }
          return sum
      }
      console.log(cashRegister(val))

