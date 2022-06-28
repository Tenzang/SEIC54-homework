const rectangleA = {
    length: 4,
    width: 4
  };

  const rectangleB = {
    length: 4,
    width: 5
  };

  const rectangleC = {
    length: 4,
    width: 7
  };
  const rectangleD = {
    length: 4,
    width: 4
  };

  const recIsTrue = function(rectangle) {
    if(rectangle.length === rectangle.width){
        console.log (`is a square`);
    }
    else {
        console.log (`is a rectangle`);
    }}

    const recArea = function(rectangle) {
        var area = rectangle.length * rectangle.width;
        console.log (`Area is ${area}`);
        }

    const recPerimeter = function(rectangle) {
        var perimeter = 2*(rectangle.length+rectangle.width);
             console.log ( `Perimeter is: ${perimeter}` );
    }



//****************** TRIANGLES *****************\\

 const triangleA = {
    SideA: 4,
    SideB: 4,
    SideC: 4
  };
  const triangleBB = {
    SideA: 5,
    SideB: 4,
    SideC: 8
  };


  const triangleC = {
    SideA: 4,
    SideB: 4,
    SideC: 5
  };
  const triangleD = {
    SideA: 4,
    SideB: 4,
    SideC: 7
  };

  //TRIANGLES\\

  const isEquilateral = function(triangle){
      if(triangle.SideA === triangle.SideB && triangle.SideB === triangle.SideC){
          console.log ("It's an equilateral")}
          else {
              console.log ("It's not equi");
          }
       
      }
    const isIsoscleses = function(triangle){
        if (triangle.SideA === triangle.SideB && triangle.SideB !== triangle.SideC){
        console.log ("It's an isosceles")
        }
      else if (triangle.SideA !== triangle.SideB && triangle.SideB === triangle.SideC){
            console.log ("It's an isosceles")  }
      else if (triangle.SideA === triangle.SideC && triangle.SideC !== triangle.SideB){
                console.log ("It's an isosceles") 
            }
            else {
                console.log ("It's not iso");
            }
     }
// the formula of finding obtuse angles may be wrong, outputs only 'it's obtuse' when tested for multiple variations
// APPROACH ONE - INCORRECT!!!        
// if (triangle.SideA !== triangle.SideB && triangle.SideB !== triangle.SideC){
        // console.log ("It's an obtuse")
        // }
        //     console.log ("It's not obt");
        // }
        // APPROACH TWO - ALMOST THERE
        const isObtuse = function(triangle){

        const angleA = Math.acos((Math.pow(triangle.SideB,2)+(Math.pow(triangle.SideC,2))-(Math.pow(triangle.SideA,2))/(2*triangle.SideB*triangle.SideC)));
        const angleB = Math.acos((Math.pow(triangle.SideC,2)+(Math.pow(triangle.SideA,2))-(Math.pow(triangle.SideB,2))/(2*triangle.SideC*triangle.SideA)));
        const angleC = Math.acos((Math.pow(triangle.SideA,2)+(Math.pow(triangle.SideB,2))-(Math.pow(triangle.SideC,2))/(2*triangle.SideA*triangle.SideB)));

        if (angleA > 90) {
            console.log("It's Obtuse")
        }
        else if (angleB > 90) {
            console.log("It's Obtuse")
        }
        else if (angleC > 90) {
            console.log("It's Obtuse")
        }
        
        else 
        {console.log("It's not obtuse")
    }
}

    console.log(isObtuse(triangleA));
    console.log(isObtuse(triangleBB));
    console.log(isObtuse(triangleC));
    console.log(isObtuse(triangleD));



// Area of Triangle
       const areaOfTri = function(triangle){
           const s = (triangle.SideA + triangle.SideB + triangle.SideC) / 2;
            var areaofTriangle  = Math.sqrt(s*((s-triangle.SideA)*(s-triangle.SideB)*(s-triangle.SideC)));
       return areaofTriangle;
        } 



        //Cash rego

        const cartForParty = {  
            banana: 1.25,
            handkerchief: 0.99,
            Tshirt: 25.01,
            apple: 0.60,
            nalgene: 10.34,
            proteinShake: 22.36
          };

// Object.value



const cashRegista = function(x) {
    let sum = Object.values(x);
    let total = 0;
        for (let i = 0; i < sum.length; i++) {
            total += sum[i];
        };
    return total; 
    };


console.log((cashRegista(cartForParty)));

// Credit Card

var card1 = "9999-9999-8888-0000111";
var card2 = "3333-3333-3333-3333";
var card3 = "1111-9999-8888-0001";
var card3 = "a923-3211-9c01-1112";


const validateCreditCard = function (x){
let cardStep1 = x.replace(/-/g, "");
for(let i=0;i<cardStep1;i++){
if (cardStep1.length !== 16){
    return "Bugger off, card number not 16";
}
else{ 
    return "Welcome";
    }
}

let cardStep2 = Array.from(String(x));
console.log (cardStep2);
let total = 0;
for (let i=o;i<cardStep2.length;i++){
    total += cardtep2[i];
    if (total > 16){
        console.log("woo")
    }
    else {console.log("Bugger of maaiite")
}
}

}

