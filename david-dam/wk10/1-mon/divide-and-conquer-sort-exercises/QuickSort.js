function quickSort(arr){
  // if (arr.length <= 1) {
  //   return arr;
  // }

  // var pivot = arr[0];
  
  // var left = []; 
  // var right = [];

  // for (var i = 1; i < arr.length; i++) {
  //   arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  // }

  // return quickSort(left).concat(pivot, quickSort(right));

  // ----------------------------------------------------------

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.shift(); // .pop() works too

  // 0(N): less code
  const lessThan = arr.filter(element => element < pivot);
  const moreThan = arr.filter(element => element >= pivot);


  // 0(N): more code
  // const lessThan = [];
  // const moreThan = [];

  // arr.forEach(element => {
  //   if (element , pivot) {
  //     lessThan.push(element);
  //   } else {
  //     moreThan.push(element);
  //   }
  // });

  return [...quickSort(lessThan), pivot, ...quickSort(moreThan)]

}

module.exports = quickSort;