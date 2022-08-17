function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j + 1], array[j]]
            }
        } 
    }
    return array;
}

let array = [234, 43, 55, 63,  5, 6, 235, 547];

console.log(bubbleSort(array));

module.exports = bubbleSort;

function bubbleSort2(array) {
    let needToIterate = true;
    let end = array.length - 1;

    while (needToIterate) {
        needToIterate = false;
        for (let i = 0; i < end; i++){
            if (array[i] > array[i+1]){
                // destructuring parallel assignment: [a, b] = [b, a]
                [array[i], array [i + 1]] = [array[i+1], array[i]]
            }
        }
        end--;
    }
    return array;
}
console.log(bubbleSort2(array));
