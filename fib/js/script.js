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

fibRecursion(1); // = 1
fibRecursion(3); // = 2
fibRecursion(13); // = 233

fibCycle(1); // = 1
fibCycle(3); // = 2
fibRecursion(13); // = 233