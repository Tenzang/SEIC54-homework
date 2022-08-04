function bubbleSort(array) {
  let swapHappened;
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
  return array;
}

function insertionSort(array) {
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
  return array;
}

// Test Script below, DO NOT TOUCH

mocha.setup("bdd");
const expect = chai.expect;

describe("Bubble Sort", () => {
  it("should sort the array", () => {
    const myArray = [12, 6, 3, 7, 13, 8];
    const sorted = bubbleSort(myArray);
    expect(sorted).to.deep.equal([3, 6, 7, 8, 12, 13]);
    const otherArray = [-3, -1, 5, 100];
    const otherSorted = bubbleSort(otherArray);
    expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
  });
});

describe("Insertion Sort", () => {
  it("should sort the array", () => {
    const myArray = [12, 6, 3, 7, 13, 8];
    const sorted = insertionSort(myArray);
    expect(sorted).to.deep.equal([3, 6, 7, 8, 12, 13]);
    const otherArray = [-3, -1, 5, 100];
    const otherSorted = insertionSort(otherArray);
    expect(otherSorted).to.deep.equal([-3, -1, 5, 100]);
  });
});

mocha.run();
