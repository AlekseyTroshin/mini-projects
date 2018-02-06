// ==============  foldl

let foldl = (arr, f) => {
	let previousValue = arr[0];

	for(let i= 1;i< arr.length; i++) {
		previousValue = f(previousValue, arr[i]);
	}	

	return previousValue;
}

let arr = [1, 2, 3, 4, 5];
let f = (a, b) =>{
	return a + b;
}

foldl(arr, f) // 15;

// ==============  foldr

let foldr = (arr, f) => {
	let previousValue = arr[arr.length - 1] || null;

	for(let i= arr.length -2; i >= 0; i--) {
		previousValue = f(previousValue, arr[i]);
	}	

	return previousValue;
}


foldr(arr, f) // 15;