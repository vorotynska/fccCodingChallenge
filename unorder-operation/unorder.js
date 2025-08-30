// unorder.js

function evaluate(numbers, operators) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return numbers[0];

    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const operator = operators[(i - 1) % operators.length];
        const num = numbers[i];

        switch (operator) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                result = Math.floor(result / num);
                break;
            case '%':
                result %= num;
                break;
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
    }
    return result;
}

console.log(evaluate([5, 6, 7, 8, 9], ['+', '-']))

function applyOperations(numbers, operators) {
    if (numbers.length === 0) return 0;
    if (numbers.length === 1) return numbers[0];

    let result = numbers[0]; // начинаем с первого числа

    for (let i = 1; i < numbers.length; i++) {
        const operator = operators[(i - 1) % operators.length]; // циклический выбор оператора
        const num = numbers[i];

        switch (operator) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                result = Math.floor(result / num); // целочисленное деление
                break;
            case '%':
                result %= num;
                break;
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
    }

    return result;
}