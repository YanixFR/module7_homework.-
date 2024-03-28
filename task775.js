function getUniqueSortedNumbers(arr) {
    const uniqueNumbers = Array.from(new Set(arr));
    return uniqueNumbers.sort((a, b) => a - b);
}

const numbers = [3, 1, 2, 3, 5, 2, 4];
const uniqueSortedNumbers = getUniqueSortedNumbers(numbers);

console.log(uniqueSortedNumbers);




