(function() {

// ==============  Recursion
let fibRecursion = n => { 
	return n > 1 ? fibRecursion(n -1) + fibRecursion(n - 2) : n;
}

// ==============  Cycle
let fibCycle = n => { 
	let a = 1;
	let b = 1;
	for(let i= 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}

	return b;
}

console.log(fibRecursion(1) === 1); // = 1
console.log(fibRecursion(3) === 2); // = 2
console.log(fibRecursion(13) === 233); // =  2

console.log(fibCycle(1) === 1); // = 1
console.log(fibCycle(3) === 2); // = 2
console.log(fibCycle(13) === 233); // =  

})();

