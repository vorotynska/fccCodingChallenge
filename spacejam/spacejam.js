// spacejam.js

function spaceJam(s) {
    return s
        .replace(/ /g, "")
        .toUpperCase()
        .split("")
        .join("  ");

}

console.log(spaceJam("Hello World?!"));
console.log(spaceJam("   free   Code   Camp   "));


// second option

function transformString(str) {
    // 1. Убираем пробелы
    let noSpaces = str.replace(/\s+/g, "");

    // 2. Преобразуем в массив символов
    let chars = noSpaces.split("");

    // 3. Делаем uppercase только для букв
    chars = chars.map(ch => {
        if (/[a-z]/i.test(ch)) {
            return ch.toUpperCase();
        }
        return ch;
    });

    // 4. Соединяем символы с ДВУМЯ пробелами между ними
    return chars.join("  ");
}