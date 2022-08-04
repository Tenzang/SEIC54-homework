function insertionSort (items) {
  
  for (let i = 1; i < items.length; i++) {
    for(let j = i; j > 0; j--) {
      if (items[j] < items[j-1]) {
        const temp = items[j];
        items[j] = items[j-1];
        items[j-1] = temp;
      } else {
        break;
      }
    }
  }
  return items;
}

module.exports = insertionSort;

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