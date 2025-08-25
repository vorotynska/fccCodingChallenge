// camel.js
function toCamelCase(s) {
    let words = s.toLowerCase().split(/[\s\-_]+/);
    let camelCase = words[0];
    for (let i = 1; i < words.length; i++) {
        camelCase += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return camelCase;
}

console.log(toCamelCase("hall_____ajjj--_--fff"));
console.log(toCamelCase("hello world"));

// best code
function toCamelCase1(s) {
    // Приводим к нижнему регистру и разделяем по пробелам/дефисам/подчёркиваниям
    let words = s.toLowerCase().split(/[\s\-_]+/);

    // Первое слово остаётся как есть
    let camelCase = words[0];

    // Все остальные: первая буква в верхнем регистре, остальные в нижнем
    for (let i = 1; i < words.length; i++) {
        camelCase += words[i][0].toUpperCase() + words[i].slice(1);
    }

    return camelCase;
}