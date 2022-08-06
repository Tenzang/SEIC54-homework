function insertionSort (items) {
  // let n = items.length;
  // for (let i = 1; i < n; i++) {
  //   // Choosing the first element in our unsorted subarray
  //   let current = items[i];
  //   // The last element of our sorted subarray
  //   let j = i - 1; 
  //   while ((j > -1) && (current < items[j])) {
  //       items[j+1] = items[j];
  //       j--;
  //   }
  //   items[j+1] = current;
  // }
  // return items;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Find the position to insert this item:
    for (var j = i-1; j >= 0 && items[j] >  item; j--) {
      items[j+1] = items[j] // swap
    }
    items[j+1] = item; // actual insertion
  }
  return items;
}

module.exports = insertionSort;