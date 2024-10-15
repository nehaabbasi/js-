// CHAPTER 10 FUNCTION//
//  QUESTION NO 1//
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));

// QUESTION NO 2//
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(celsiusToFahrenheit(25));

//  QUESTION NO  3//
function isPrime(number) {
    if (number < 2)
         return false; 
    // Numbers less than 2 are not prime
    if (number === 2) 
        return true; 
    // 2 is the only even prime number
    if (number % 2 === 0) 
        return false; 
    // All other even numbers are not prime

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
             // If divisible by any number, it's not prime
        }
    }

    return true; 
    // If no divisors found, it's prime
}
console.log(isPrime(15));
 //  false (15 is not prime)

//  QUESTION NO 4//

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); 

// question no 5//

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// question no 6//
function greet() {
   var string = "hello, welcome";
   return string;
    
} 
var call =  greet( "hello, welcome");
console.log(call);

// question no 7//
function greeting( fname, lname ) {
    console.log( " hello " + fname+ " " + lname +"!");

} greeting("neha" , "abbasi");

//  question no 8//
function sum(a,b) {
    return a + b;
}
console.log (sum ( 4,5));

//  question no 9//
function getRandomNumber() {
    return Math.floor(Math.random() * 101);
}
console.log(getRandomNumber());

// question no 10//

function vote(age) {
    return age >=18;
}
console.log(vote( 23));
console.log(vote (15));

//  chapter :11 ARROW FUNCTION//
//  QUESTION NO 1//
var square = (num) => num * num;


console.log(square(7)); 
console.log(square(3));

// question no 2//
var evenNumbers = arr => {
    let result = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
};
console.log(evenNumbers([12, 17, 24, 31, 42]));

// question no 3//
const concatenateStrings = (str1, str2) => {return str1 + str2;
}
console.log(concatenateStrings("Hello, ", "World!")); 

// question no 4//
var findMax = (arr) => {return Math.max(...arr);
}
console.log(findMax([3, 7, 2, 10, 6])); 

//  question no 5//
var sumOfnumbers= arr => {
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        return sum;
    };
    console.log(sumOfnumbers([1, 2, 3, 4, 5])); 


    // question no 6//
    var string = () =>{
        return " hello world!";
    };
    console.log(string());

    //  question no 7//
    var sqaure= (num) =>{
        return num * num;
    };
    console.log(sqaure(6));

    // question no 8//
    var postiveNum= (number) =>{
        if ( number > 0){
            return true
        }
       if (number<0)  {
        return false
       }
    };
    console.log(postiveNum(2));
    console.log(postiveNum(-6));

    //  question no 9//

    var getRandomNumber=() =>{
        return Math.floor(Math.random() * 61);
    }
    console.log(getRandomNumber());

    //  question no 10//
var convert=( minute) =>{
return minute* 60;
};
console.log(convert(8));

// chapter :12 ANNOYMOUS FUNCTION//
// question NO 1//

(function () {
    console.log("hello");
    
}());

// question no 2//
 var sum =function (a,b) {
    var total = a+ b;
return total;
}
var result= sum( 2,5);
console.log(result);
 
//  question no 3//

const numbers = [5, 3, 8, 1, 2];

// Sort the array in ascending order using an anonymous function
numbers.sort(function(a, b) {
    return a - b; 
});

console.log(numbers); 

// question no 4//

var message= function ( fname, lname ) {
    console.log( " hello " + fname+ " " + lname +"!");

} 
message("neha" , "abbasi");

// question no 5//
 var checkEvenOdd = function(number) {
    if(number % 2===0){
        return "its even";
    }
    else {
        return "its odd";
    }
 }
 console.log(checkEvenOdd(4));
 console.log(checkEvenOdd(7));

//  question no 6//
var oddnumbers = [1,4,7,3,10,11,8];

// Filter the array to get only the odd numbers using an anonymous function
 var checkodd = oddnumbers.filter(function(num) {
    return num % 2 !== 0; 
});

console.log(checkodd + " its odd number"); 

// question no 7//
 var factorial= function(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// question no 8 //
setTimeout(function() {
    console.log("Time's up!"); 
}, 3000); // 3000 milliseconds =  3 seconds

// question no 9//
const values = [5, 15, 25, 35];
const total = values.reduce((sum, number) => sum + number, 0);

console.log(total);

// question no 10//
var ques= prompt( " whats ur age?")
 var vote = function (age) {
    return ques >=18;
}
console.log(vote( 23)); //eligible to vote//
//  completed//