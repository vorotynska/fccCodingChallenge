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

// 0–9 → charCodeAt() - 48 (т.к. '0' имеет код 48).

// A–Z → charCodeAt() - 65 + 10 (т.к. 'A' → 10, 'B' → 11 и т.д.).

// ---------------------------------------------------------

// 1. Уникальные элементы массива
const arr = [1, 2, 2, 3, 4, 4, 5];

// Способ 1 — через Set
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5]

// Способ 2 — через filter
const unique2 = arr.filter((el, i) => arr.indexOf(el) === i);
console.log(unique2); // [1, 2, 3, 4, 5]

// 2. Найти повторяющиеся элементы
const arr1 = [1, 2, 2, 3, 4, 4, 5];

const duplicates = arr1.filter((el, i) => arr1.indexOf(el) !== i);
console.log([...new Set(duplicates)]); // [2, 4]

// 3. Пересечение массивов (что есть и там, и там)
const aa = [1, 2, 3, 4];
const bb = [3, 4, 5, 6];

const intersection = aa.filter(el => bb.includes(el));
console.log(intersection); // [3, 4]

// 4. Разность массивов (что есть в a, но нет в b)
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

const difference = a.filter(el => !b.includes(el));
console.log(difference); // [1, 2]

// 5. Симметрическая разность (только уникальное из обоих массивов)
const aaa = [1, 2, 3, 4];
const bbb = [3, 4, 5, 6];

const symmetricDiff = [...aaa.filter(el => !bbb.includes(el)),
    ...bbb.filter(el => !aaa.includes(el))
];
console.log(symmetricDiff); // [1, 2, 5, 6]