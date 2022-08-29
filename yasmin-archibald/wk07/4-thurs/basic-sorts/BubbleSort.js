// function bubbleSort(array) {
//   let swap = false;
//   if (!sorted) {
//     sorted = true;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > array[i + 1]) {
//         let c = array[i];
//         array[i] = array[i + 1];
//         array[j + 1] = c;
//         swap = true;
//       }
//       if (swap) {
//         return array;
//       }
//     }
//   }
//   return array;
// }

function bubbleSort(array) {
  let needToIterate = true; //need to iterate at least once to check it
  let end = array.length - 1;
  while (needToIterate) {
    needToIterate = false; // if nothing in the loop needs to be changed then we'll keep false and exit the function
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        //parallel assignment
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // destructuring parallel assignment
        needToIterate = true; // we found at least one unswapped things so we gotta check again
      }
    }
    end--; //getting closer to finishing
  }
  return array;
}

module.exports = bubbleSort;
