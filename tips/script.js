// Строчные
const lowercase = Array.from({
    length: 26
}, (_, i) => String.fromCharCode(97 + i));

// Заглавные
const uppercase = Array.from({
    length: 26
}, (_, i) => String.fromCharCode(65 + i));

console.log(lowercase);
console.log(uppercase);

console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
console.log("Z".charCodeAt(0)); // 90
console.log("z".charCodeAt(0)); // 122