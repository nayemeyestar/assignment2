// Ask the user how many times to print "Hello"
const count = parseInt(prompt("Enter the number of times to print 'Hello':"));

// Check if input is valid
if (isNaN(count) || count <= 0) {
    console.log('Please enter a valid positive number');
} else {
    // Print "Hello" the specified number of times
    let output = '';
    for (let i = 0; i < count; i++) {
        output += 'Hello\n';
    }
    console.log(output);
}
