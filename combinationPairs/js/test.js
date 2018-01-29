Array.prototype.flatten = function () {
  return this.reduce((z, x) => z.concat(x), [])  
}

function combinationPairs(num) {
	let arr = [];

	if(1 === num) {
		return [1, 1];
	} else {
		for(let i= 1; i<= num; i++) {
			for(let j= 1; j<= num; j++) {
				let newArr = [i, j];
				arr.push(newArr);
			}
		}
	}

	return combinationSort(arr);	
}

function combinationSort(arr) {
	let sortArr = arr.slice();
	combinationArr = [];
	arr.map((index, i) => {
		let newIndex = index.slice();

		if(index[0] > index[1]) {
			newIndex[0] = index[1];
			newIndex[1] = index[0];
		}

		if(sortArr[i].join() === newIndex.join()) {
			combinationArr.push(newIndex);
		}
	});

	return combinationArr;
}


console.log(combinationPairs(1).flatten().join() === [[1 ,1]].flatten().join());
console.log(combinationPairs(2).flatten().join() === [[1 ,1], [1, 2], [2, 2]].flatten().join());
console.log(combinationPairs(3).flatten().join() === [[1, 1], [1 ,2], [1, 3], [2, 2], [2, 3], [3, 3]].flatten().join());