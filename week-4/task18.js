// Initial array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers); // [1, 3, 5, 7, 9]

// Find the sum of the odd numbers
const sumOfOddNumbers = oddNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of odd numbers:", sumOfOddNumbers); // 25