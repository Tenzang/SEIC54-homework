// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangleA = {
    length: 4,
    width: 6,

  };


const isSquare = function (rectangle){
    if (rectangle.length===rectangle.width){
        console.log('its a square')
      } else 
        console.log('its a rectangle')
    };
    
const area= function (rectangle){
    const area = rectangle.length * rectangle.width
    return area
}
 console.log (area + 'this is the square area.')

 const perimeter= function(rectangle){
    return (rectangle.length + rectangle.width)* 2;
 }
 console.log(perimeter(rectangleA));


//  Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 6,
  sideC: 4
};
const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 4
  };

 const isEquilateral = function(triangle){
    if (triangle.sideA === triangle.sideB && triangle.sideA=== triangle.SideC) {
        console.log('it is an equilateral triangle.')
        } else 
        console.log('it is not an equilateral triangle')
}

const isIsosceles = function(triangle){
    if (triangle.sideA===triangle.sideB && triangle.sideA !==triangle.sideC|| triangle.sideC===triangle.sideA && triangle.sideC!== triangle.sideB) {
        console.log('this is an isosceles triangle')
    } else {
        console.log('this is not an isosceles triangle?')
    }
}

const isObtuse =  function(triangle){
    if(triangle.sideA!==triangle.sideB && triangle.SideC!==triangle.sideA) {
        console.log('This is an Obtuse triangle')
    } else {
        console.log('This is not an Obtuse triangle')
    }
}



// // The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55

const cartForParty = {  
      banana: 1.25,
      handkerchief: .99,
      Tshirt: 25.01,
      apple: 0.60,
      nalgene: 10.34,
      proteinShake: 22.36
    };
    

    const cartTotal = function(objectSum){

        var shoppingTotal= 0  
        for( let key in objectSum ) {
             shoppingTotal= (objectSum[key] + shoppingTotal) 
            console.log(shoppingTotal) 

         } 
    }
       



    


    const cartForBarbecue = {
        rumpSteak: 29.5,
        chorizoSausage: 15.0,
        caseOfBeer: 49.99,
        chickenWings: 12.99,
        kebabsSkewers: 22.75,
        bottleOfJack: 55.,

    }

    const barbecueTotal= function(objectSum){

        let barbecueSum= 0                    //this is equal to zero to begin with because we havent added nothing to it yet, as we loop and add the numbers in the list we will later change the value of this function to the acctual total.

        for( let key in objectSum ) {           // this is an special way to write an loop used only to loop tru OBJECTS only.
            barbecueSum = (objectSum[key] + barbecueSum)
        }          
        return 'the total shopping value for the barbeque is ' + barbecueSum + ' dollars.'
    };