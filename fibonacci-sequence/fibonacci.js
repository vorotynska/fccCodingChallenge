// fibonacci.js

function fibonacciSequence(startSequence, length) {
    const sequence = [...startSequence];

    if (length === 0) return [];
    if (length === 1) return [sequence[0]];
    if (length === 2) return sequence;

    for (let i = 1; i < length - 1; i++) {
        let num = 0;
        num = sequence[i] + sequence[i - 1];
        sequence.push(num)
    }
    return sequence;
}

console.log(fibonacciSequence([0, 1], 20))
console.log(fibonacciSequence([10, 20], 2))
console.log(fibonacciSequence([10, 20], 1))
console.log(fibonacciSequence([21, 32], 1))

// second option

function fibonacciSequence1(start, length) {
    if (length === 0) return [];
    if (length === 1) return [start[0]];
    if (length === 2) return [start[0], start[1]];

    const sequence = [start[0], start[1]];

    while (sequence.length < length) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }

    return sequence;
}