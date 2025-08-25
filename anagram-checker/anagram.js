// anagram.js

function areAnagrams(str1, str2) {
    const sortStr = str =>
        str
        .toLowerCase()
        .replace(/\s+/g, "")
        .split("")
        .sort()
        .join("");

    return sortStr(str1) === sortStr(str2);
}

console.log(areAnagrams("Hello", "borld"));
console.log(areAnagrams("School master", "The classroom"))

// second option

function areAnagrams1(str1, str2) {
    // нормализуем строки: убираем пробелы и приводим к нижнему регистру
    str1 = str1.replace(/\s+/g, "").toLowerCase();
    str2 = str2.replace(/\s+/g, "").toLowerCase();

    if (str1.length !== str2.length) return false;

    const count = {};

    // увеличиваем счётчик для букв из первой строки
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    // уменьшаем счётчик для букв из второй строки
    for (let char of str2) {
        if (!count[char]) return false; // если буквы нет или она уже "исчерпана"
        count[char]--;
    }

    return true;
}

// Примеры:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("rail safety", "fairy tales")); // true
console.log(areAnagrams("hello", "world")); // false