// 1. Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number%2==0) {
     return 'Even'; 
    } 
     else
       {
      return 'Odd' ;  
       }
    }

// 2. Multiply 
//This code does not execute properly. Try to figure out why.
function multiply(a, b){
    return  a * b;
   }

// 3. Opposites Attract
/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.  
*/

function lovefunc(flower1, flower2){
    if ((flower1%2 == 0 & flower2 %2 ==1) || (flower2 % 2 == 0 & flower1% 2 ==1)){
      return true;
    }
     else {
       return false;
     }
   }

// 4. Opposite number 
/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/

function opposite(number) {
    return number*(-1)
   }
