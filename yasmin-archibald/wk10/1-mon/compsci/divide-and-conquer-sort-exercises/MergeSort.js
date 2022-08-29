function mergeSort(arr) {
  if (arr.length <= 1) {
    alert('why did you try to sort this?');
    return arr;
  } else {
    const middleIndex = Math.floor(arr.length / 2); // whole num only, round down
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex) // auto goes to end if you only provide a starting index
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight); // helper function glues back together
  }
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
