let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//------------------------ Encrypt
function encrypt(alphabet, shift) {
	let cipher = [];
	let longAlphabet = alphabet.length;
	shift = shift - 1;

	for(let i= 0; i< longAlphabet; i++) {
		let shiftLetter = alphabet[(i + shift) % longAlphabet];
		cipher.push(shiftLetter);
	}

	return cipher;
}

//------------------------ Decrypt
function decrypt(alphabet, shift) {
	let decipher = [];
	let longAlphabet = alphabet.length;
	shift = shift - 1;

	for(let i= 0; i< longAlphabet; i++) {
		let shiftLetter = alphabet[(longAlphabet - shift + i) % longAlphabet];
		decipher.push(shiftLetter);
	}

	return decipher;
}

let newEncrypt = encrypt(alphabet, 3);
console.log(newEncrypt);

let newDecrypt = decrypt(newEncrypt, 3);
console.log(newDecrypt);