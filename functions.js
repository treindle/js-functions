/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(number){

  return number.toString();

}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 function increase(number) {

  return number + 1;
 }

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(number) {

  return number - 1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x,y){
  return x + y;
}


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 function subtract(x,y){
  return x - y;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply(x,y){
  return x * y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide(x,y){
  return x / y;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x){
  return x * x;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(operation, x, y){
 var result;
  if (operation === "add"){
    result = add(x, y);
    console.log(x + " + " + y + " = " + result);

  } else if (operation === "subtract"){
    result = subtract(x, y);
    console.log(x + " - " + y + " = " + result);

  } else if (operation === "multiply"){
    result = multiply(x, y);
    console.log(x + " * " + y + " = " + result);

  } else if (operation === "divide"){
    result = divide(x, y);
    console.log(x + " / " + y + " = " + result);
  }

 return result;

}
   
calculate("add", 1, 2);
 




/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */


function isGreaterThan(x, y){

  if (x > y)
    return true;
    else return false;
}

isGreaterThan(11, 10);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(x, y){

  if (x < y)
    return true;
    else return false;
}

isLessThan(11, 10);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(x, y){

  if (x === y)
    return true;
    else return false;
}

areEqual(11, 10);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x, y){

  if (x < y)
    return x;
    else return y;
}

minimum(11, 10);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 function maximum(x, y){

  if (x > y)
    return x;
    else return y;
}

maximum(11, 10);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 function isEven(n){

  if (n%2 === 0)
    return true;
    else return false;
}

isEven(10);

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd(n){

  if (n%2 === 0)
    return false;
    else return true;
}

isOdd(10);
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */



      function letterGrade(score, total){
       var grade = 100 * (score/total);

        if(grade >= 90){
          return "A";
        }else if(grade >= 80 && grade < 90){
          return "B";
        }else if(grade >= 70 && grade < 80){
          return "C";
        }else if(grade >= 60 && grade < 70){
          return "D";
        }else if(grade >= 50 && grade < 60){
          return "F";
}

}

  letterGrade(60, 100);
//**
 /* Checks if a `restaurant` object has a `reviews` field.
 * If it does, increase the `reviews` value by 1. 
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

 function incrementReviews(restaurant){
  
  if (restaurant.hasOwnProperty("reviews")){
  restaurant.reviews += 1;

} else { 
  restaurant.reviews = 1; 
} 
  return restaurant;
}


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 function combine(word1, word2){
 
var string = (word1 + " " + word2);
return string;
 }
 combine("yes", "no");




/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius){
  var circle = {

    circumference : (Math.PI * 2 * radius),
    area : (Math.PI * radius * radius)

  };
   

    
   


    
  return circle;

}
    