function minHeightBst(array) {
  let returned = addToTree(array, null)
	// console.log(returned)
	return returned
}

function addToTree(array, tree) {
	let middle = Math.floor((array.length - 1) / 2)
	if (tree === null) {
		tree = new BST(array[middle])
		if (array.length === 1) return tree
		if (array.length === 2) {
			tree.insert(array[1])
			return tree
		}
		addToTree(array.slice(0, middle), tree)
		addToTree(array.slice(middle + 1, array.length), tree)
	} else if (array.length <= 2) {
		tree.insert(array[0])
		if (array.length === 2) {
			tree.insert(array[1])
		}
		return
	} else {
		tree.insert(array[middle])
		addToTree(array.slice(0, middle), tree)
		addToTree(array.slice(middle + 1, array.length), tree)
	}
	return tree
}
