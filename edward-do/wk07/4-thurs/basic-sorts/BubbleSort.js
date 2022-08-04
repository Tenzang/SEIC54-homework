function bubbleSort(array) {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.

    // Make another loop (inside the first one) to go through one 
    // round of swapping from the start of the list to the end
    
    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.

    // Make sure to keep track of whether a swap happened!

    // After both loops have exited, remember to return the array

    for (let i = 0; i < array.length; i++) {
        // Last i elements are already in place 
        for (let j = 0; j < ( array.length - i - 1 ); j++) {  
            // Checking if the item at present iteration
            // is greater than the next iteration
            if (array[j] > array[j + 1]) {
                // If the condition is true then swap them
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array;
}

module.exports = bubbleSort;

// [4, 2, 3, 1, 5]
//  i i+1