// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }

  
  const num1 = 10;
const num2 = 5;
const operator = '+';
console.log(calculate(num1, num2, operator)); // Output: 15

console.log(calculate(num1, num2, '-')); // Output: 5
console.log(calculate(num1, num2, '*')); // Output: 50
console.log(calculate(num1, num2, '/')); // Output: 2
console.log(calculate(num1, num2, '%')); // Output: "Invalid operator"
