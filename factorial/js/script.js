// ==============  Recursion
function factorialRecursion(n) {
	return n > 1 ? n * factorialRecursion(n - 1) : n;
}

// ==============  Cycle
function factorialCycle(n) {
	let res = 1;

	for(let i= 1; i <= n; i++) {
		res = res * i;
	}

	return res;
}

factorialRecursion(5); // = 120;
factorialRecursion(7); // = 5040;
factorialCycle(5); // = 120;
factorialCycle(13); // = 6227020800;