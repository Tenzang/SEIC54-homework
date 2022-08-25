function quickSort(arr) {
	const lessThan = arr.filter((element) => element < pivot);
	const moreThan = arr.filter((element) => element >= pivot);

	// const lessThan = [];
	// const moreThan = [];
	// arr.forEach((element) => {
	// 	if (element < pivot) {
	// 		lessThan.push(element);
	// 	} else {
	// 		moreThan.push(element);
	// 	}
	// });
	return [...quickSort(lessThan), pivot, ...quickSort(moreTHan)];
}

module.exports = quickSort;
