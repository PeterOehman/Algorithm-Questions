function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b)
	arrayTwo = arrayTwo.sort((a, b) => a - b)
	let smallest = Infinity
	let pointer1 = 0, pointer2 = 0
	let index;
	while ((pointer1 < arrayOne.length) && (pointer2 < arrayTwo.length)) {
		if (arrayOne[pointer1] < arrayTwo[pointer2]) {
			pointer1++
		} else {
			pointer2++
		}
		let attempt = Math.abs(arrayOne[pointer1] - arrayTwo[pointer2])
		if (attempt < smallest) {
			smallest = attempt
			index = [arrayOne[pointer1], arrayTwo[pointer2]]
		}
	}
	return index
}
