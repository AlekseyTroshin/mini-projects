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

	return arr;
}

console.log(permutationPairs(1).flatten().join() === [[1, 1]].flatten().join());
console.log(permutationPairs(2).flatten().join() === [[1, 1], [1, 2], [2, 1], [2, 2]].flatten().join());
console.log(permutationPairs(3).flatten().join() === [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]].flatten().join());