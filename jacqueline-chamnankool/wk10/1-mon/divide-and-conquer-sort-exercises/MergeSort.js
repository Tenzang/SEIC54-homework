function mergeSort(arr) {
  const middleIndex = arr.length / 2;

  if (arr.length < 2) return arr;

  const left = arr.splice(0, middleIndex);
  return merge(mergeSort(left), mergeSort(arr));
}

// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
