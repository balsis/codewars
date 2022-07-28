// 1. Vowel Count

/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    if (!isNaN(str)){
            return 0;
        }
        else { 
        let vowels = 0;
        let word1 = str.replace("-", '');
        let word2 = word1.replace(" ", '');
        let word3 = word2.toLowerCase();
        let word4 = word3.replace(/[^a-z]/g,'');  
        let symbols = word4.split(''); 
        for (i = 0; i < symbols.length; i++){      
            if (symbols[i] === 'a' || symbols[i] === 'e'|| symbols[i] === 'i'|| symbols[i] === 'o'|| symbols[i] === 'u') {
                vowels++;   
            }          
    }   return vowels;
          }}
      
