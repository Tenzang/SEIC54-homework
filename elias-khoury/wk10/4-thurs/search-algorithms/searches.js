function binarySearch(haystack, needle) {
	// 	element = Number(element);
	// 	for (let i = 0; i < arr.length; i++) {
	// 		if (element === arr[i]) {
	// 			return i;
	// 		}
	// 	}
	// 	return -1;
	let start = 0;
	let end = haystack.length - 1;
	let midpoint = Math.floor((start + end) / 2); //there is a serious bug on this line

	// While the needle is not found AND there are still haystack elements to consider
	while ((haystack[midpoint] !== needle) & (start < end)) {
		if (needle < haystack[midpoint]) {
			end = midpoint - 1;
		} else {
			start = midpoint + 1;
		}
		midpoint = Math.floor((start + end) / 2);
	}

	return needle === haystack[midpoint] ? midpoint : -1;
}

function recursiveBinarySearch(haystack, needle, start = 0, end = haystack.length - 1, midpoint = Math.floor((start + end) / 2)) {
	// base case
	if (haystack[midpoint] === needle) return midpoint; // success
	if (start >= end) return -1; // failure
	if (needle < haystack[midpoint]) {
		end = midpoint - 1;
	} else {
		start = midpoint + 1;
	}
	// recurse
	return recursiveBinarySearch(haystack, needle, start, end);
}

module.exports = {
	binarySearch,
	recursiveBinarySearch,
};
