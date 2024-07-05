// Function to calculate the sum of all even numbers within the range
function sumOfEvenNumbers(first, last) {
    let sum = 0;
    for (let i = first; i <= last; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

// Prompt the user for the range of numbers
let firstNumber = parseInt(prompt("Enter the first number of the range:"));
let lastNumber = parseInt(prompt("Enter the last number of the range:"));

// Calculate the sum of even numbers
let sum = sumOfEvenNumbers(firstNumber, lastNumber);

// Display the result in the console
console.log(`The sum of all even numbers from ${firstNumber} to ${lastNumber} is: ${sum}`);
