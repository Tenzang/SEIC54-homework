function quickSort(arr){
  if (arr.length <= 1) return arr;

  const left = [];
  const right = [];
  const sorted = [];
  const pivot = arr.pop(); //last number

  for (let i = 0; i < arr.length; i++) {
    (arr[i] <= pivot) ? left.push(arr[i]) : right.push(arr[i]);
  }

  return sorted.concat(quickSort(left), pivot, quickSort(right));
}

module.exports = quickSort;