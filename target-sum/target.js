// target.js

function findTarget(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return "Target not found"
}

console.log(findTarget([1, 3, 5, 6, 7, 8], 15));
console.log(findTarget([1, 3, 5, 7], 14))
console.log(findTarget([3, 2, 4, 5], 6))

// 

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];

        if (map.has(num)) {
            const j = map.get(num);
            return [Math.min(i, j), Math.max(i, j)];
        }

        map.set(nums[i], i);
    }

    return "Target not found";
}

// Примеры:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([1, 5, 3, 8], 20)); // "Target not found"