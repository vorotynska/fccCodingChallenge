// vowel.js

function isBalanced1(s) {
    if (s.length = 0) return true;
    let newS = s.toLowerCase();
    let sumF = 0;
    let sumS = 0;
    if (newS.length % 2 === 0) {

        let first = newS.slice(0, (newS.length) / 2);

        for (let i = 0; i < first.length; i++) {
            if (first[i] === "a" || first[i] === "e" || first[i] === "i" || first[i] === "o" || first[i] === "u") {
                sumF += 1;
            }
        }

        let second = newS.slice(-(newS.length) / 2);
        for (let i = 0; i < second.length; i++) {
            if (second[i] === "a" || second[i] === "e" || second[i] === "i" || second[i] === "o" || second[i] === "u") {
                sumS += 1;
            }
        }
    } else {
        let first = newS.slice(0, (newS.length - 1) / 2);
        console.log(first)
        for (let i = 0; i < first.length; i++) {
            if (first[i] === "a" || first[i] === "e" || first[i] === "i" || first[i] === "o" || first[i] === "u") {
                sumF += 1;
            }
        }
        let second = newS.slice(-(newS.length - 1) / 2);
        console.log(second)
        for (let i = 0; i < second.length; i++) {
            if (second[i] === "a" || second[i] === "e" || second[i] === "i" || second[i] === "o" || second[i] === "u") {
                sumS += 1;
            }
        }
    }
    return sumF === sumS;
}

console.log(isBalanced1("racecar"));

function isBalanced(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    //If the length is odd, ignore the center character
    if (s.length % 2 !== 0) {
        s = s.slice(0, Math.floor(s.length / 2)) + s.slice(Math.floor(s.length / 2));
    }

    const half = s.length / 2;
    const first = s.slice(0, half);
    const second = s.slice(-half);
    console.log(first, second);
    const countVowels = str => [...str].reduce((count, char) => count + vowels.has(char), 0);

    return countVowels(first) === countVowels(second);
}

console.log(isBalanced(" "));