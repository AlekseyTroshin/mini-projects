function mapR(fn, xs) {

  function go(fn, xs) {
  	if(xs.length) {
  		return [fn(xs[0]), ...go(fn, xs.slice(1))];
  	} else {
  		return [];
  	}
  }

  return go(fn, xs)
}

mapR(x => 2 * x, [1, 2, 3]); // [2, 4, 6]
