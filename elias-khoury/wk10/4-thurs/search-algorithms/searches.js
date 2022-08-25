function binarySearch(arr, element) {
	element = Number(element);
	for (let i = 0; i < arr.length; i++) {
		if (element === arr[i]) {
			return i;
		}
	}
	return -1;
}

function recursiveBinarySearch(arr, element) {
	//  search through the array recursively for the element
	//  you may need to add more parameters to this function!
	//  if the element is not found, return -1
	//  if the element is found, return the index at which it was found
}

module.exports = {
	binarySearch,
	recursiveBinarySearch,
};
