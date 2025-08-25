// prime.js

function isUnnaturalPrime(n) {
    if (n === 0 || n === 1 || n === -1) return false;
    const num = Math.abs(n);
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// если у числа есть делитель больше √num, то второй делитель обязательно будет меньше √num.

function isPrimeOrNegativePrime(n) {
    // 0 и 1 — не простые
    if (n === 0 || n === 1 || n === -1) return false;

    // Берём абсолютное значение (чтобы проверить и отрицательные)
    const num = Math.abs(n);

    // Все числа меньше 2 — не простые
    if (num < 2) return false;

    // Проверяем делители от 2 до sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // есть делитель → не простое
    }

    return true; // простое или отрицательное простое
}