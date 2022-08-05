// function insertionSort(array) {
//   // this is one I looked at online and studdied btw
//   let n = array.length;
//   for (let i = 1; i < n; i++) {
//     // Choosing the first element in our unsorted subarray
//     let current = array[i];
//     // The last element of our sorted subarray
//     let j = i - 1;
//     while (j > -1 && current < array[j]) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = current;
//   }
//   return array;
// }

function insertionSort(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    for (var j = i - 1; j >= 0 && items[j] > item; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = item;
  }
  return items;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));

module.exports = insertionSort;
