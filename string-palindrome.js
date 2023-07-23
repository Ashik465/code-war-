function isPalindrome(inputString) {

    const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
  
 
    const reversedString = cleanedString.split('').reverse().join('');
  
    return cleanedString === reversedString;
  }
  
 
  const inputString1 = "A man, a plan, a canal: Panama";
  const inputString2 = "racecar";
  const inputString3 = "jackfruit";
  
  console.log(isPalindrome(inputString1)); 
  console.log(isPalindrome(inputString2)); 
  console.log(isPalindrome(inputString3)); 
  