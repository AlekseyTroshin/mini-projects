// Array.prototype.flatten = function () {
//   return this.reduce((z, x) => z.concat(x), [])  
// }

// function permutationPairs(num) {
// 	let arr = [];

// 	for(let i= 1; i<= num; i++) {
// 		for(let j= 1; j<= num; j++) {
// 			let newArr = [i, j];
// 			arr.push(newArr);
// 		}
// 	}

// 	return arr;
// }

// console.log(permutationPairs(1).flatten().join() === [[1, 1]].flatten().join());
// console.log(permutationPairs(2).flatten().join() === [[1, 1], [1, 2], [2, 1], [2, 2]].flatten().join());
// console.log(permutationPairs(3).flatten().join() === [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]].flatten().join());


// let range = (n) => Array(n).fill(null).map((_, i) => i)
// console.log(range(2)); // [0, 1]
// console.log(range(3)); // [0, 1, 2]


let range = (n) => Array(n).fill(null).map((_, i) => i)

Array.prototype.flatten = function () {
  return this.reduce((z, x) => z.concat(x), [])
}

Array.prototype.flatMap = function (fn) {
  return this.map(fn).flatten()
}

// Проще или нет? ;) никаких мутабельных пушей и прочей дряни
let permutationPairs = (n) => {
  return range(n).flatMap(x => {
    return range(n).map(y => {
      return [x, y]
    })
  })
}

console.log(permutationPairs(2));