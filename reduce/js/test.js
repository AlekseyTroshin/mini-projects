

(function() {

let arr = [1, 2, 3, 4, 5];
let fPlus = (a, b) =>{
	return a + b;
}
let fMinus = (a, b) =>{
	return a - b;
}
let fPow = (a, b) =>{
	return a * b;
}	


// ==============  foldl
let foldl = (arr, f) => {
	let previousValue = arr[0];

	for(let i= 1;i< arr.length; i++) {
		previousValue = f(previousValue, arr[i]);
	}	

	return previousValue;
}


console.log(foldl(arr, fPlus) === 15); // 15;
console.log(foldl(arr, fMinus) === -13); // 15;
console.log(foldl(arr, fPow) === 120); // 15;

// ==============  foldr
let foldr = (arr, f) => {
	let previousValue = arr[arr.length - 1] || null;

	for(let i= arr.length -2; i >= 0; i--) {
		previousValue = f(previousValue, arr[i]);
	}	

	return previousValue;
}


console.log(foldr(arr, fPlus) === 15); // 15;
console.log(foldr(arr, fMinus) === -5); // 15;
console.log(foldr(arr, fPow) === 120); // 15;

})();