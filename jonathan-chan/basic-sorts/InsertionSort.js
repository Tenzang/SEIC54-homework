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

  for (i=0; i<items.length; i++) {
    for (j=i; j>0; j--) {
      if (items[j]<items[j-1]) {
        const current = items[j]
        items[j] = items[j-1]
        items[j-1] = current
      }
    }
  }

  return items;
}

const myArray = [12,6,3,7,13,8];
console.log(insertionSort(myArray))

module.exports = insertionSort;
