function uid(alphabet, n) {
   let answer = '';

   for(let i= 0; i< n; i++) {
   		answer += alphabet[randomNumber(0, n)];
   }

   console.log(answer);

   return answer;
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

uid("abc", 3); // example == acc
uid("abc", 2); // example == ba
uid("abcdefg...0123456789", 12); // example == a.fg.. 12