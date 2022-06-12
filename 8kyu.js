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

// 7. Sum of positive

/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
    let sum=0;
    let i=0;
    for (i of arr) { 
    if (i>0) sum=sum+i;   
    } 
    return sum  
}

function positiveSum(arr) {
  let sum=0;
  for (let i=0; i<=arr.length; i++) {   
  if (arr[i]>0) sum=sum+arr[i];
  }  
  return sum
}

// 8. Convert boolean values to strings 'Yes' or 'No'.

/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

function boolToWord( bool ){
  return bool==true ? 'Yes' : 'No';
}

//9. Rock Paper Scissors

/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  let res;
  if (p1==p2);{
    res='Draw!';
  }
  if (p1=='scissors'&&p2=='paper'){
    res='Player 1 won!';
  }
  if (p1=='paper'&&p2=='rock'){
    res='Player 1 won!';
  }  
  if (p1=='rock'&&p2=='scissors'){
    res='Player 1 won!';
  }    
  if (p2=='scissors'&&p1=='paper'){
    res='Player 2 won!';
  }
  if (p2=='paper'&&p1=='rock'){
    res='Player 2 won!';
  }  
  if (p2=='rock'&&p1=='scissors'){
    res='Player 2 won!';  
  }  
  return res
};

// 10.Remove First and Last Character
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str){
 return res=str.slice(1, -1)
};

// 11. Grasshopper - Personalized Message
/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

function greet (name, owner) {
if (name == owner) {
    return "Hello boss";
} else {
    return "Hello guest";
}
}
