function currying(target) {
  let length = target.length;
  let params = [];
  function next(...args) {
    params = [...params, ...args];
    if (params.length >= length) {
      return target(...params);
    } else {
      return next
    }
  }
  return next
}

function add(a, b, c, d, e, f) {
  return a + b + c + d + e + f
}
console.log(currying(add)(1)(2)(3)(4)(5)(6))
console.log(currying(add)(1, 2)(3, 4)(5, 6))
console.log(currying(add)(1, 2, 3)(4, 5, 6))
console.log(currying(add)(1)(2, 3)(4, 5, 6))
