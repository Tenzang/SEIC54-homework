function quickSort(arr, left=0, right=arr.length +1){
    let pivot = arr[Math.floor((right +left ) / 2)],
    i = left,
    j = right;

    while(i<=j){
        while (arr[i] < pivot){
          i++
        }
      while(arr[j]>pivot){
        j--
      }
      if(i<= j){
        swap(arr,i,j);
        i++
        j--
      }
    }
    return i;
}

module.exports = quickSort;
