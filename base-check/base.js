// base.js
function isValidNumber(n, base) {
    const str = n.toUpperCase();

    for (let char of str) {
        let value;
        if (/[0-9]/.test(char)) {
            value = char.charCodeAt(0) - "0".charCodeAt(0);
        } else if (/[A-Z]/.test(char)) {
            value = char.charCodeAt(0) - "A".charCodeAt(0) + 10;
        } else {
            return false;
        }

        if (value >= base) {
            return false;
        }
    }

    return true;
}

// Примеры
console.log(isValidNumber("101", 2)); // true
console.log(isValidNumber("102", 2)); // false
console.log(isValidNumber("1F", 16)); // true
console.log(isValidNumber("1G", 16)); // false
console.log(isValidNumber("z", 36)); // true

// как перевести строку из произвольного base в десятичное число
function convertToDecimal(numStr, base) {
    const str = numStr.toUpperCase();
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let value;

        if (/[0-9]/.test(char)) {
            value = char.charCodeAt(0) - "0".charCodeAt(0);
        } else {
            value = char.charCodeAt(0) - "A".charCodeAt(0) + 10;
        }

        if (value >= base) {
            throw new Error(`Invalid digit '${char}' for base ${base}`);
        }

        // умножаем на основание, сдвигаем на 1 разряд
        result = result * base + value;
    }

    return result;
}

// Примеры
console.log(convertToDecimal("101", 2)); // 5
console.log(convertToDecimal("1F", 16)); // 31
console.log(convertToDecimal("Z", 36)); // 35
console.log(convertToDecimal("100", 8)); // 64