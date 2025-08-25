// jbelmud.js

function jbelmu(text) {
    return text.split(" ")
        .map((word) => {
            if (word.length <= 2) return word; // words of 1-2 letters do not change
            let first = word[0];
            let middle = word.slice(1, -1).split("").sort((a, b) => a.localeCompare(b)).join('');
            let last = word[word.length - 1];
            return first + middle + last;

        }).join(" ");
}

console.log(jbelmu("hello world"));