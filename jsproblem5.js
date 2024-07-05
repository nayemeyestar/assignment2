// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to calculate the number of leap years within the range
function countLeapYears(firstYear, lastYear) {
    let leapYearCount = 0;
    for (let year = firstYear; year <= lastYear; year++) {
        if (isLeapYear(year)) {
            leapYearCount++;
        }
    }
    return leapYearCount;
}

// Prompt the user for the range of years
let firstYear = parseInt(prompt("Enter the first year of the range:"));
let lastYear = parseInt(prompt("Enter the last year of the range:"));

// Calculate the number of leap years
let leapYearCount = countLeapYears(firstYear, lastYear);

// Display the result in the console
console.log(`The total number of leap years from ${firstYear} to ${lastYear} is: ${leapYearCount}`);
