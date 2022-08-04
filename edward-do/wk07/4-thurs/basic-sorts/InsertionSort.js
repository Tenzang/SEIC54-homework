function insertionSort (items) {
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

  let n = items.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = items[i];
    // The last element of our sorted subarray
    let j = i - 1; 
    while ((j > -1) && (current < items[j])) {
        items[j+1] = items[j];
        j--;
    }
    items[j+1] = current;
  }
  return items;
}

module.exports = insertionSort;
