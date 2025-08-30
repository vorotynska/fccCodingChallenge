// parenthesis.js

function decode(s) {
    let stack = [''];
    for (let char of s) {
        if (char === '(') {
            stack.push('');
        } else if (char === ')') {
            let reversed = stack.pop().split('').reverse().join('');
            stack[stack.length - 1] += reversed;
        } else {
            stack[stack.length - 1] += char;
        }
    }
    return stack[0];
}

console.log(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"));

function decodeParentheses(s) {
    let stack = ['']; // начальный уровень без скобок

    for (let char of s) {
        if (char === '(') {
            // начинаем новую группу
            stack.push('');
        } else if (char === ')') {
            // закончили группу — разворачиваем и добавляем к предыдущему уровню
            let reversed = stack.pop().split('').reverse().join('');
            stack[stack.length - 1] += reversed;
        } else {
            // обычный символ добавляем к текущему уровню
            stack[stack.length - 1] += char;
        }
    }

    return stack[0];
}

console.log(decodeParentheses("((is?)(a(t d)h)e(n y( uo)r)aC)"));