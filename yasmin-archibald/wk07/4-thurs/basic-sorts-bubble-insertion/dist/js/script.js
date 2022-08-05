function bubbleSort(array) {
  let swap = false;
  if (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let c = array[i];
        array[i] = array[i + 1];
        array[j + 1] = c;
        swap = true;
      }
      if (swap) {
        return array;
      }
    }
  }
  return array;
}
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
//  _.each(array, ); idk if underscore is that helpful here

// stable in-place comparison-type of sorting method
// stable meaning elements retain their relative positions after sorting
// in place meaning the algorithm uses no additional memory or datastructures, rewriting original memory locations of the elements being sorted
// comparision algorithm meaning .. some kind of comparison operation (only one tho) .. maybe relational or a custom comparison finction
function insertionSort(array) { // this is one I looked at online and studdied btw 
  let n = array.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = array[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));
// Loop through each element

// store the current item value so it can be placed correctly
// in the sorted portion of the array

// Loop backward through the sorted portion of the array
// and scoot everything over until you find the right place to
// insert the value you're working with

// Copy each item to the next slot over, as long as the value is smaller
// than the item in the sorted array we're looking at (items[j] > value)

// We can now insert the item in its sorted location

// Remember to return the list!

// Test Script below, DO NOT TOUCH

// mocha.setup("bdd");
// const expect = chai.expect;

// describe("Bubble Sort", () => {
//   it("should sort the array", () => {
//     const myArray = [12, 6, 3, 7, 13, 8];
//     const sorted = bubbleSort(myArray);
//     expect(sorted).to.deep.equal([3, 6, 7, 8, 12, 13]);
//     const otherArray = [-3, -1, 5, 100];
//     const otherSorted = bubbleSort(otherArray);
//     expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
//   });
// });

// describe("Insertion Sort", () => {
//   it("should sort the array", () => {
//     const myArray = [12, 6, 3, 7, 13, 8];
//     const sorted = insertionSort(myArray);
//     expect(sorted).to.deep.equal([3, 6, 7, 8, 12, 13]);
//     const otherArray = [-3, -1, 5, 100];
//     const otherSorted = insertionSort(otherArray);
//     expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
//   });
// });

// mocha.run();
