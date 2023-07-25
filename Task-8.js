// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.



function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    return secondSmallest;
  }

  
  const inputArray = [5, 3, 8, 2, 1, 6];
const secondSmallest = findSecondSmallest(inputArray);
console.log(secondSmallest); // Output: 2
