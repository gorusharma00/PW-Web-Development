function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...args2) {
                return curried(...args.concat(args2));
            }
        }
    };
}
function add(a, b) {
    return a + b;
}

let curriedAdd = curry(add);

console.log(curriedAdd(1)(4)); 