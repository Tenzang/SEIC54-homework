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

module.exports = bubbleSort;
