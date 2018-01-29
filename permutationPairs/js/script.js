Array.prototype.flatten = function () {
  return this.reduce((z, x) => z.concat(x), [])  
}

function permutationPairs(num) {
	let arr = [];

	if(1 === num) {
		arr.push([1, 1]);
	} else {
		for(let i= 1; i<= num; i++) {
			for(let j= 1; j<= num; j++) {
				let newArr = [i, j];
				arr.push(newArr);
			}
		}
	}

	return arr.flatten();
}

permutationPairs(1); // [[1, 1]]
permutationPairs(2); // [[1, 1], [1, 2], [2, 1], [2, 2]]
permutationPairs(3); // [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]