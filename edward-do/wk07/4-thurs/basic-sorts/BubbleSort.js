function bubbleSort(array) {
    // for (let i = 0; i < array.length; i++) {
    //     // Last i elements are already in place 
    //     for (let j = 0; j < ( array.length - i - 1 ); j++) {  
    //         // Checking if the item at present iteration
    //         // is greater than the next iteration
    //         if (array[j] > array[j + 1]) {
    //             // If the condition is true then swap them
    //             let temp = array[j]
    //             array[j] = array[j + 1]
    //             array[j + 1] = temp
    //         }
    //     }
    // }
    // return array;

    let needToIterate = true;

    let end = array.length - 1;

    while (needToIterate) {
        needToIterate = false; // assume we are done
        for (let i = 0; i < end; i++) {
            if (array[i] > array[i+1]) {
                // destructuring parallel assignment: [a, b] = [b, a];
                [array[i], array[i+1]] = [array[i+1], array[i]];
                needToIterate = true;
            }
        }
        end--;
    }

    return array;
}

module.exports = bubbleSort;