//Part 1 --------------------------------------------------

const squareNumber = function (num) { //Takes in number and squares it then logs it
    const ans = num * num; //Formula for squaring
    console.log(`The Squaring of ${num} is ${ans}`); //Printing out answer for user
    return(ans);
};


const halfNumber = function (num1) { //Takes in number, halves and logs it
    const answer = num1/2;//Formula for halving
    console.log(`Half of ${num1} is ${answer}`); //Printing out answer
    return(answer);
};

const percentOf = function (num2,num3) { //Takes in both parameters
    const percent = (num2/num3)* 100; //Formula for getting percentage
    console.log(`${num2} is ${percent}% of ${num3}`); //Printing out answer
    return(percent);
};


const areaOfCircle = function (radius) {
    const area = (Math.PI)*radius*radius;//Formula for Area of circle
    console.log(`The area for a circle with radius ${radius} is ${Math.round(area * 100)/100}.`); //Print
    return(area);
};



//Part 2 --------------------------------------------------

const calculator = function (num4) {
    const halved = halfNumber (num4);
    const squared = squareNumber (halved);
    const nArea = areaOfCircle (squared);
    const percentage = percentOf (nArea,squared);
    
    console.log ("%" + Math.round(percentage * 100)/100)

};

calculator (10);