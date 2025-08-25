// mile.js

function averagePace(miles, time) {
    // 1. Разбиваем строку "MM:SS"
    let [minutes, seconds] = time.split(":").map(Number);

    // 2. Переводим в общие секунды
    let totalSeconds = minutes * 60 + seconds;

    // 3. Среднее время на милю в секундах
    let paceSeconds = Math.floor(totalSeconds / miles);

    // 4. Переводим обратно в MM:SS
    let paceMinutes = Math.floor(paceSeconds / 60);
    let paceRemainSeconds = paceSeconds % 60;

    // 5. Добавляем ведущие нули (padStart)
    let formattedMinutes = String(paceMinutes).padStart(2, "0");
    let formattedSeconds = String(paceRemainSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
}

// Пример:
console.log(averagePace(3, "25:30")); // "08:30"
console.log(averagePace(5, "40:00")); // "08:00"

function milePace(miles, duration) {
    let [min, sec] = duration.split(":").map(Number);
    let totalSec = min * 60 + sec;
    let paceSeconds = Math.floor(totalSec / miles);
    let paceMinutes = Math.floor((paceSeconds / 60));
    let paceRemainSeconds = paceSeconds % 60;
    let formattedMinutes = String(paceMinutes).padStart(2, "0");
    let formattedSeconds = String(paceRemainSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
}

console.log(milePace(3, "24:00"));

function averagePace1(miles, time) {
    // 1. Разбиваем строку "MM:SS"
    let [minutes, seconds] = time.split(":").map(Number);

    // 2. Переводим в общие секунды
    let totalSeconds = minutes * 60 + seconds;

    // 3. Среднее время на милю (в секундах)
    let paceSeconds = Math.floor(totalSeconds / miles);

    // 4. Переводим обратно в минуты и секунды
    let paceMinutes = Math.floor(paceSeconds / 60);
    let paceRemainSeconds = paceSeconds % 60;

    // 5. Форматируем вручную, добавляя ноль если нужно
    let formattedMinutes = paceMinutes < 10 ? "0" + paceMinutes : "" + paceMinutes;
    let formattedSeconds = paceRemainSeconds < 10 ? "0" + paceRemainSeconds : "" + paceRemainSeconds;

    return formattedMinutes + ":" + formattedSeconds;
}

// Примеры:
console.log(averagePace1(3, "25:30")); // "08:30"
console.log(averagePace1(5, "40:00")); // "08:00"