function sortedSquaredArray(array) {
	let squaredArray = [];
	for (let i = 0; i < array.length; i++) {
		squaredArray.push(array[i] ** 2)
	}
	squaredArray.sort((a, b) => a - b)
	return squaredArray
}
