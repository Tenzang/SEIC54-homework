function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;