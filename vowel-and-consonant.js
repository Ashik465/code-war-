function countNumberOFVowelsAndConsonants(inputString) {
    const lowerCaseString = inputString.toLowerCase();
  
    let vowelCount = 0;
    let consonantCount = 0;
  
  
    const vowelRegex = /[aeiou]/;
  
 
    for (let i = 0; i < lowerCaseString.length; i++) {
      const char = lowerCaseString[i];
  
      
      if (char.match(/[a-z]/)) {
      
        if (vowelRegex.test(char)) {
          vowelCount++;
        } else {
          consonantCount++;
        }
      }
    }
  
    return { vowels: vowelCount, consonants: consonantCount };
  }
  

  const inputString = "i love to visit cox bazar";
  const result = countNumberOFVowelsAndConsonants(inputString);
  console.log("Vowel count:", result.vowels);
  console.log("Consonant count:", result.consonants);
  