// second.js
function getLaptopCost(laptops, budget) {
    let sortArr = [...new Set(laptops)]
        .sort((a, b) => b - a);
    console.log(sortArr)
    let moreExpensive = sortArr.filter(num => num > budget);
    let affordable = sortArr.filter(num => num <= budget);

    if (moreExpensive.length && affordable.length) return affordable[0];
    if (moreExpensive.length === 0) return affordable[1];
    return 0;
}

console.log(getLaptopCost([1500, 2000, 1800, 1400], 1900)); // 1800
console.log(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)); // 1800
console.log(getLaptopCost([2099, 1599, 1899, 1499], 2200)); // 1899
console.log(getLaptopCost([2099, 1599, 1899, 1499], 1000)); // 0
console.log(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)); // 1400;

// -------------------------
function getLaptopCost(laptops, budget) {
    // Убираем дубликаты и сортируем по убыванию
    const sorted = [...new Set(laptops)].sort((a, b) => b - a);

    // Все, что не дороже бюджета
    const affordable = sorted.filter(p => p <= budget);

    // Ничего не помещается
    if (affordable.length === 0) return 0;

    // Есть ли вообще цены выше бюджета? (самая большая цена > бюджет)
    const hasUnaffordable = sorted[0] > budget;

    // Если есть более дорогие, берем самый дорогой, который влезает
    if (hasUnaffordable) return affordable[0];

    // Иначе бюджет покрывает все — берем вторую по цене (или единственную, если второй нет)
    return affordable.length >= 2 ? affordable[1] : affordable[0];
}