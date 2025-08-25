// factorializer.js

function factorial(n) {
    if (n === 0) return 1; // base case
    return n * factorial(n - 1);
}

console.log(factorial(5));