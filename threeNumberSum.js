function threeNumberSum(array, targetSum) {
	array = array.sort((a, b) => a - b)
  let triplets = [];
	let left, right
	for (let i = 0; i < array.length - 2; i++) {
		left = i + 1;
		right = array.length - 1;
		while (left !== right && left < right) {
			let sum = array[i] + array[left] + array[right]
			if (sum === targetSum) {
				triplets.push([array[i], array[left], array[right]])
				right--
				left++
			} else if (sum > targetSum) {
				right--
			} else if (sum < targetSum) {
				left++
			}
		}
	}
	return triplets
}
