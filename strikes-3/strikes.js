// strikes.js

function squaresWithThree(n) {
    if (!Number.isInteger(n) || n < 1 || n > 10000) {
        throw new Error("n must be an integer between 1 and 10000");
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        let square = i * i;
        if (square.toString().includes("3")) {
            count++;
        }
    }
    return count;
}

// case second

function countSquaresWith3(n) {
    return Array.from({
            length: n
        }, (_, i) => (i + 1) ** 2) // создаём массив квадратов
        .filter(num => num.toString().includes("3")) // оставляем только те, где есть "3"
        .length; // считаем их количество
}

// Пример:
console.log(countSquaresWith3(20)); // 3

// case 3

function countSquaresWith3(n) {
    return Array.from({
            length: n
        }, (_, i) => (i + 1) ** 2)
        .filter(num => /3/.test(String(num)))
        .length;
}

// Примеры:
console.log(countSquaresWith3(20)); // 7
console.log(countSquaresWith3(100)); // посчитает количество квадратов <= 100^2 с "3"

// case 4

function countSquaresWith3(n) {
    return Array.from({
            length: n
        }, (_, i) => (i + 1) ** 2)
        .reduce((count, num) => count + (/3/.test(String(num)) ? 1 : 0), 0);
}

// Примеры:
console.log(countSquaresWith3(20)); // 7
console.log(countSquaresWith3(100)); // результат для 1..100

// 5

function countSquaresWith3(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (/3/.test(String(i * i))) {
            count++;
        }
    }
    return count;
}

// Примеры:
console.log(countSquaresWith3(20)); // 7
console.log(countSquaresWith3(100)); // результат для 1..100