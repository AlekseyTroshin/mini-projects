(function() {

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

console.log(factorialRecursion(5) == 120);
console.log(factorialRecursion(7) == 5040);
console.log(factorialCycle(5) == 120);
console.log(factorialCycle(13) == 6227020800);

})();