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

//5. Grasshopper - Summation
/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
  let sum=0;
  for (i=0; i<=num; i++) {
      sum = sum+i;      
    }
  return sum;
  }

// 6. Return Negative
/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/

function makeNegative(num) {
  if(num>0){
    return num=-num
  }else{
    return num=num
  }
}
