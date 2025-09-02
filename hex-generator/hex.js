// hex.js

function generateDominantHex(color) {
    if (typeof color !== "string") return "Invalid color";
    const key = color.trim().toLowerCase();
    const channels = ["red", "green", "blue"];
    const idx = channels.indexOf(key);
    if (idx === -1) return "Invalid color";

    // Случайно задаём два недоминантных канала (0..254),
    // затем доминантный канал берём строго больше их max (до 255).
    const vals = [0, 0, 0];
    const others = [0, 1, 2].filter(i => i !== idx);
    vals[others[0]] = Math.floor(Math.random() * 255); // 0..254
    vals[others[1]] = Math.floor(Math.random() * 255); // 0..254
    const maxOther = Math.max(vals[others[0]], vals[others[1]]);
    vals[idx] = Math.floor(Math.random() * (256 - (maxOther + 1))) + (maxOther + 1); // (maxOther+1)..255

    const toHex = n => n.toString(16).padStart(2, "0");
    return `#${toHex(vals[0])}${toHex(vals[1])}${toHex(vals[2])}`;
}

// Примеры:
console.log(generateDominantHex("red")); // например: #f43a1b  (R > G,B)
console.log(generateDominantHex("green")); // например: #18c47a  (G > R,B)
console.log(generateDominantHex("blue")); // например: #0a1bf5  (B > R,G)
console.log(generateDominantHex("yellow")); // "Invalid color"


// 3 
function generateHex(color) {
    // случайная пара hex-символов (00–ff)
    function randHexPair(low, high) {
        const val = Math.floor(Math.random() * (high - low + 1)) + low;
        return val.toString(16).padStart(2, "0");
    }

    let r, g, b;

    if (color === "red") {
        r = randHexPair(128, 255); // доминирующий канал
        g = randHexPair(0, 127);
        b = randHexPair(0, 127);
    } else if (color === "green") {
        r = randHexPair(0, 127);
        g = randHexPair(128, 255);
        b = randHexPair(0, 127);
    } else if (color === "blue") {
        r = randHexPair(0, 127);
        g = randHexPair(0, 127);
        b = randHexPair(128, 255);
    } else {
        return "Invalid color";
    }

    return `#${r}${g}${b}`;
}

// Примеры
console.log(generateHex("red")); // "#e23f56"
console.log(generateHex("green")); // "#23d27a"
console.log(generateHex("blue")); // "#4a56f1"