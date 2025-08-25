// battle.js

function battle(myArmy, opposingArmy) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let myScore = 0;
    let opposingScore = 0;

    // "Opponent retreated" if your army has more characters than the opposing army
    if (myArmy.length > opposingArmy.length) return "Opponent retreated";
    if (myArmy.length < opposingArmy.length) return "We retreated";

    function charPosition(char, alphabet) {
        let index = alphabet.indexOf(char);
        if (index === -1) return null;
        return index;
    }

    function charBattle(ch) {
        //let num;
        if (/[a-z]/.test(ch)) return charPosition(ch, lowercase) + 1;
        if (/[A-Z]/.test(ch)) return charPosition(ch, uppercase) + 27;
        if (/[0-9]/.test(ch)) return parseInt(ch, 10);
        return 0;
    }

    // myArmy.length = opposingArmy.length
    for (let i = 0; i < myArmy.length; i++) {
        const myResult = charBattle(myArmy[i]);
        const opposingResult = charBattle(opposingArmy[i]);

        if (myResult > opposingResult) myScore++
        if (myResult < opposingResult) opposingScore++;
    }

    if (myScore > opposingScore) return "We won"
    if (myScore < opposingScore) return "We lost"
    return "It was a tie"
}

console.log(battle("555", "666"))
console.log(battle("Hello", "World")); // "We lost"
console.log(battle("pizza", "salad")); // "We won"
console.log(battle("C@T5", "D0G$")) // "We won"
console.log(battle("Mr. Smith", "Dr. Jones")); // "It was a tie"

// second 2 
function getStrength(ch) {
    if (/[a-z]/.test(ch)) {
        return ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1; // 1–26
    } else if (/[A-Z]/.test(ch)) {
        return ch.charCodeAt(0) - 'A'.charCodeAt(0) + 27; // 27–52
    } else if (/[0-9]/.test(ch)) {
        return parseInt(ch); // цифры = их значение
    } else {
        return 0; // все остальное = 0
    }
}

function battle1(myArmy, opponentArmy) {
    if (myArmy.length > opponentArmy.length) return "Opponent retreated";
    if (myArmy.length < opponentArmy.length) return "We retreated";

    let myWins = 0;
    let oppWins = 0;

    for (let i = 0; i < myArmy.length; i++) {
        const myStrength = getStrength(myArmy[i]);
        const oppStrength = getStrength(opponentArmy[i]);

        if (myStrength > oppStrength) myWins++;
        else if (oppStrength > myStrength) oppWins++;
    }

    if (myWins > oppWins) return "We won";
    if (oppWins > myWins) return "We lost";
    return "It was a tie";
}

// Примеры
console.log(battle1("abc", "ABC")); // "We lost" (так как A=27 > a=1 и т.д.)
console.log(battle1("Zz9", "zz8")); // "We won"
console.log(battle1("abcd", "abc")); // "Opponent retreated"