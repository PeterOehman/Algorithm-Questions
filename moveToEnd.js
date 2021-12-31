function moveElementToEnd(array, toMove) {
	let left = 0
	let right = array.length - 1
	while (left < right) {
		while (array[right] === toMove && left < right) {
			right--
		}
		while (array[left] !== toMove && left < right) {
			left++
		}
		if (array[right] !== toMove && array[left] === toMove) {
			array[left] = array[right]
			array[right] = toMove
		}
	}
	return array
}
