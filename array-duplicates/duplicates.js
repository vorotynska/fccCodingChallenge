// duplicates.js
function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return [...duplicates].sort((a, b) => a - b);
}

console.log(findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4])); // [-6, 0, 2, 4, 5, 23]

// вариант через filter и indexOf
function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index)
        .filter((item, index, self) => self.indexOf(item) === index)
        .sort((a, b) => a - b);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]
console.log(findDuplicates([1, 2, 3])); // []