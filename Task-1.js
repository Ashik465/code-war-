
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"




function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString.charAt(i);
    }
    return reversedString;
  }

  const input = "hello world";
const reversedOutput = reverseString(input);
console.log(reversedOutput); 