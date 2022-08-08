
function bubbleSort(array) {
    let doIterate = true;

    let endOfArray = array.length - 1;

    while (doIterate){
        doIterate = false; // Assume we are all done;
        for (let i = 0; i < endOfArray; i++){
            if (array[i] > array[i+1]){
                //destructuring parallel assignment
                [ array[i],array[i+1] ] = [ array[i+1], array[i]];
                doIterate = true;
            }
        }
        endOfArray--;
    };
    return array;
}

module.exports = bubbleSort;