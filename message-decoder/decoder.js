// decoder.js

function decode(message, shift) {
    // Строчные буквы
    const lowercase = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    // Заглавные буквы
    const uppercase = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    const corectMessage = [];

    const encodeArr = [...message.split("")];
    for (let item of encodeArr) {

        let indexLowercase = lowercase.indexOf(item);
        if (indexLowercase === -1) {
            let indexUppercase = uppercase.indexOf(item);
            if ((indexUppercase === -1)) {
                corectMessage.push(item);
            } else {
                let index = indexUppercase - shift;
                if (index < 0) index = uppercase.length + index;
                if (index > uppercase.length - 1) index = index - uppercase.length;
                corectMessage.push(uppercase[index]);
            }
        } else {
            let index = indexLowercase - shift;
            if (index < 0) index = lowercase.length + index;
            if (index > lowercase.length - 1) index = index - lowercase.length;
            corectMessage.push(lowercase[index]);
        }
    }
    return corectMessage.join("");
}

console.log(decode("Xlmw mw e wigvix qiwweki.", 4)); // This is a secret message.
console.log(decode("Byffi Qilfx!", 20)); // Hello World
console.log(decode("Zqd xnt njzx?", -1)); // Are you okay? Ypc wms miyw?

// case 2
function decode1(message, shift) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    function shiftChar(char, alphabet) {
        let index = alphabet.indexOf(char);
        if (index === -1) return null;

        index = (index - shift) % alphabet.length;
        if (index < 0) index += alphabet.length;

        return alphabet[index];
    }

    return message
        .split("")
        .map(ch => shiftChar(ch, lowercase) ||
            shiftChar(ch, uppercase) ||
            ch)
        .join("");
}

// Пример
console.log(decode1("Khoor Zruog!", 3)); // "Hello World!"


//  case 3
function decodeMessage(message, shift) {
    let result = "";

    for (let char of message) {
        if (/[a-z]/.test(char)) {
            // строчные буквы
            let code = char.charCodeAt(0) - 97; // 'a' = 97
            let newCode = (code - shift) % 26;
            if (newCode < 0) newCode += 26;
            result += String.fromCharCode(newCode + 97);
        } else if (/[A-Z]/.test(char)) {
            // заглавные буквы
            let code = char.charCodeAt(0) - 65; // 'A' = 65
            let newCode = (code - shift) % 26;
            if (newCode < 0) newCode += 26;
            result += String.fromCharCode(newCode + 65);
        } else {
            // не буквы — не трогаем
            result += char;
        }
    }

    return result;
}

// Пример:
console.log(decodeMessage("Khoor Zruog!", 3)); // "Hello World!"
console.log(decodeMessage("Lipps Asvph!", 4)); // "Hello World!"
console.log(decodeMessage("Hello World!", -3)); // "Khoor Zruog!"