function findMax(arr){
    // This function returns the largest number in a given array.
  let index = 1;
  let largestNum = arr[0];
  
  function rMax(){
    if (index === arr.length) {
      return largestNum;
    };
    if ( arr[index] > largestNum ) { 
        largestNum = arr[index]
    }; 
    index++;
    return rMax();
  };
  
  return rMax();
};

console.log( findMax([2, 420, 632, 10, 520, 3, 4, 5]) );

function factorial(num){
    // This function returns the factorial of a given number.
  let currentTotal = 1;
  
  function rFactorial() {
    if ( num === 1 ) return currentTotal;
    currentTotal *= num;
    num--;
    return rFactorial();
  };
  return rFactorial();
}

console.log( factorial(5) );

function fibonacci(nth, index = 1, fibbNums = [0, 1]){
    // This function returns the Nth number in the fibonacci sequence.
    // For this function, the first two fibonacci numbers are 1 and 1.

  function rFibonacci() {
    if ( index === nth ) return fibbNums[index];
    let nextNum = fibbNums[index] + fibbNums[index-1];
    fibbNums.push(nextNum);
    index++;
    return rFibonacci();
  };

  return rFibonacci();
};

console.log( fibonacci(7) );