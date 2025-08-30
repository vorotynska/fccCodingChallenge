// candeleloght.js
function burnCandles(candles, leftoversNeeded) {
    let totalBurned = candles;
    let leftovers = candles;

    do {
        let recycleCandles = Math.floor(leftovers / leftoversNeeded);
        totalBurned += recycleCandles;
        leftovers = leftovers % leftoversNeeded + recycleCandles;

    }
    while (leftovers >= leftoversNeeded);
    return totalBurned;
}

console.log(burnCandles(7, 2)); // 13
console.log(burnCandles(20, 3)); // 29
console.log(burnCandles(2345, 3)); // 3517

// second
function burnCandles1(candles, leftoversNeeded) {
    let totalBurned = candles; // счётчик всех сожжённых свечей
    let remainders = candles; // изначально столько же огарков

    while (remainders >= leftoversNeeded) {
        let newCandles = Math.floor(remainders / leftoversNeeded); // сколько новых сделаем
        totalBurned += newCandles; // добавляем новые сожжённые
        remainders = (remainders % leftoversNeeded) + newCandles; // пересчитываем огарки
    }

    return totalBurned;
}