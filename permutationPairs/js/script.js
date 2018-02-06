function permutationPairs(num) {
	let arr = [];

	for(let i= 1; i<= num; i++) {
		for(let j= 1; j<= num; j++) {
			let newArr = [i, j];
			arr.push(newArr);
		}
	}

	return arr;
}

console.log(permutationPairs(1)); // [[1, 1]]
console.log(permutationPairs(2)); // [[1, 1], [1, 2], [2, 1], [2, 2]]
console.log(permutationPairs(3)); // [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]