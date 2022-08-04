function sumArrayOfNums(arr, index = 0, sum = 0){ //#1
if(index === arr.length){ // This is the Base case #2
    return sum;
    }
    sum += arr[index]; // #3 Action step
    return sumArrayOfNums(arr, index + 1, sum);
}
// Step 1 = // - arr (The array we're in) -index (the index we're at) -sum (The sum of numbers so far) -// 
// Step 2 = // Define the Base Case 
// Step 3 = // Give em Somthing to do, add the number at the current index to the sum of the array 
// Step 4 = // Recursion , !!!Return!!! the function with new arguments to make progress toward the base case

console.log(sumArrayOfNums([2, 4, 5, 8]));
 

