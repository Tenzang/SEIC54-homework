function quickSort(arr){
  const lessThan = [];
  const moreThan = [];
  if (arr.length <= 1) {
    return arr;
  } else {
    const pivot = arr.shift() // any val from arr, we're picking the first one. Doesn't matter, we just need one thing from the arr
    arr.forEach(e => {
      if (e < pivot) {
        lessThan.push(e);
      } else {
        moreThan.push(e)
      }
    });
  }
  return [...quickSort(lessThan), pivot, ...quickSort(moreThan)];
}

module.exports = quickSort;