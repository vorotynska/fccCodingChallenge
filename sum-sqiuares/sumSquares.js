// sumSquares.js

function sumOfSquares(n) {
    if (!Number.isInteger(n) || n < 1 || n > 1000) {
        throw new Error("n must be an integer between 1 and 1000");
    }
    if (n === 1) return 1;
    return n ** 2 + sumOfSquares(n - 1);
}

console.log(sumOfSquares(10));

// second case Использует формулу суммы квадратов: 
function sumSquares(n) {
    if (!Number.isInteger(n) || n < 1 || n > 1000) {
        throw new Error("n must be an integer between 1 and 1000");
    }
    return (n * (n + 1) * (2 * n + 1)) / 6;
}

// Примеры:
console.log(sumSquares(1)); // 1
console.log(sumSquares(3)); // 14  (1+4+9)
console.log(sumSquares(10)); // 385


// 3 case
function sumSquaresLoop(n) {
    if (!Number.isInteger(n) || n < 1 || n > 1000) {
        throw new Error("n must be an integer between 1 and 1000");
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i * i;
    return sum;
}