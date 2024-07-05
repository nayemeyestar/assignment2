// Prompt the user for the range of numbers
let firstNumber = parseInt(prompt("Enter the first number of the range:"));
let lastNumber = parseInt(prompt("Enter the last number of the range:"));

// Function to calculate the average of all even numbers within the range
function averageOfEvenNumbers(first, last) {
    let sum = 0;
    let count = 0;
    for (let i = first; i <= last; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;
}

// Function to calculate the average of all odd numbers within the range
function averageOfOddNumbers(first, last) {
    let sum = 0;
    let count = 0;
    for (let i = first; i <= last; i++) {
        if (i % 2 !== 0) {
            sum += i;
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;
}

// Calculate the averages
let averageEven = averageOfEvenNumbers(firstNumber, lastNumber);
let averageOdd = averageOfOddNumbers(firstNumber, lastNumber);

// Display the results in the console
console.log(`The average of all even numbers from ${firstNumber} to ${lastNumber} is: ${averageEven}`);
console.log(`The average of all odd numbers from ${firstNumber} to ${lastNumber} is: ${averageOdd}`);
