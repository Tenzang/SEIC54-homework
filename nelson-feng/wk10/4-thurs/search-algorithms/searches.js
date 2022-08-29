function binarySearch(haystack, needle){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    // I want to find the element of 1

        // let start = 0;
        // let end = arr.length;
        // while(end > start){
        //     let mid = Math.floor((start + end)/2);
        //     if(element > arr[mid]){
        //         start = mid + 1;
        //     }
        //     else if(element < arr[mid]){
        //         end = mid;
        //     }
        //     else{
        //         return arr[mid];
        //     }
        // }
        // return -1;

        let start = 0;
        let end = haystack.length - 1;
        let midpoint = Math.floor((start + end) /2)

        while (haystack[midpoint] !== needle && start < end) {
            if (needle < haystack[midpoint]){
                end = midpoint - 1;
            } else {
                start = midpoint + 1;
            }
            midpoint = Math.floor((start + end)/2);
        }

        return (needle === haystack[midpoint]) ? midpoint : -1;

    }

function recursiveBinarySearch(haystack, 
                                needle,
                                start = 0,
                                end = haystack.length - 1,
                                midpoint = Math.floor((start + end)/2)) {
    if (haystack[midpoint] === needle) return midpoint; //basecase success
    if (start >= end) return -1;  //basecase failure

    if (needle < haystack[midpoint]) {
        end = midpoint - 1;
    } else {
        start = midpoint + 1;
    }

    return recursiveBinarySearch(haystack, needle, start, end);
    }


module.exports = {
    binarySearch,
    recursiveBinarySearch
}