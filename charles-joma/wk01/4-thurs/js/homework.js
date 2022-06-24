



const rectangleA = {
    length: 4,
    width: 4
  };

  const rectangle = function(rectangleObj){
    let isSquare;
    let area;
    let perimeter;
    if(rectangleObj.length === rectangleObj.width){
        isSquare = `This is a square`
        area = rectangleObj.width * 2;
        perimeter = rectangleObj.width * 4
    } else {
        return `This aint no square`
    }
    return `${isSquare} with an area of ${area * area}m squared and a perimeter of ${perimeter}m`
}

console.log(rectangle(rectangleA))


//=====================================T R I A N G L E===IDK=======================================//


const triangleA = {
    sideA: 4,
    sideB: 2,
    sideC: 2
  };

let x = triangleA.sideA
let y = triangleA.sideB
let z = triangleA.sideC 

const isEquilateral = function(triangle){
    let isEquilateral = 'This boy is not no Equilateral';
    if( x === y && x === z){
        isEquilateral = `This is an Equilateral Triangle`;
        return isEquilateral 
    } else {
        return isEquilateral
    }
}

const isIsoscele = function(Triangle){
    let isIsoscele = 'This boy is an Iso no no';
    if( x === y || x === z){
        isIsoscele = `This is an Isoscele triangle`
        return isIsoscele
    } else if( y === z || z === x){
        isIsoscele = `This is an Isoscele triangle`
        return isIsoscele 
    } else {
        return isIsoscele
    }
}
//==This is not correct==//
const isObtuse = function(triangle){
    let isObtuse = `This is and OBBBBBbbbbbbTTTuuuusssee`;
    if( x !== y && x !== z && z !== y){
        return `This is an OBBBBBbbbbbbTTTuuuusssee`
    } else {
        return isObtuse
    }
}

const triArea = function(triObj){
    let notTriangle = `I want a whole triangle of cheese bitch`
    let height = x + y + z 
    height = height / 2
    let area = 0.5 * ( z * height);
    return `The area of the Rectangle is ${area * area}m squared`
}

    
console.log(isEquilateral(triangleA));
console.log(isIsoscele(triangleA));
console.log(isObtuse(triangleA));
console.log(triArea(triangleA));




//===================================The Cash Register=================================//

const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };


const cashRegister = function(cart){
    //This Method takes in an object and return the values of the object in an array
    const objectValuesToArray = Object.values(cart);
    let total = 0;
    //This for loop, loops throught the returned values in objectValuesToArray
    for(let i = 0; i < objectValuesToArray.length; i++){
        //By default the values return from the previous method are string, The Number object wrapper turns the values into numbers
        //I then add then to the total
        total += Number(objectValuesToArray[i])
    }
    console.log(`The Total for the shopping cart is $${total}`)
}

cashRegister(cartForParty);



//====================================C R E D I T ||||||| C A R D ||||||||| V A L I D A T I O N ================================================//


const isSixteen = function(string){
    let length;
    //let removeDash = string.replace(/-/g, "")
    //Array.from is an inbuit array method that returns an array from array like objects, so strings, other arrays // 
    let arrayFrom = Array.from(string);
    if( arrayFrom.length < 19){
        length = false
        return length
    } else {
        length = arrayFrom.length
        return length
    }
    
    //return arrayFrom
    //return removeDash
    //return length
    //return removeDash
}

const sumOfCard = function(string){
    let sum = 0;
    let removeString = string.replaceAll("-",'');
    for(let i = 0; i < removeString.length; i++){
        sum += Number(removeString[i]);
    }
    return sum;
}

const isEven = function(string){
    let total = 0;
    let removeString = string.replaceAll("-",'');
    for(let i = 0; i < removeString.length; i++){
        total = Number(removeString)
        total.split(total)
        for(let i = 0; i < removeString; i++){

        }
    }
    
    return total
}



console.log(isEven('1234-7854-2345-2341'))
//console.log(sumOfCard('1111-1111-1711-1111'))
//console.log(isSixteen('1234-7854-2345-2345'))





//Must be 16 digits long
//Must be all numbers
//More than 2 different digits
//final digit must be even
//sum must be > 16