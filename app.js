// ASSIGNMENT NO 20
// var date = new Date();
// console.log(date);

// q2
    // const monthNames = ["January", "February", "March", "April", "May", "June",
                        // "July", "August", "September", "October", "November", "December"];
    
    // const Date = new Date();
    // const monthIndex = Date.getMonth();
    // const monthName = monthNames[monthIndex];

    // return monthName;


// console.log("The current month is: " + getCurrentMonth());
// q3
    // const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    // const currentDate = new Date();
    // const dayIndex = currentDate.getDay();
    // const dayAbbreviation = dayNames[dayIndex];

    // return dayAbbreviation;


//     `javascript
// // 1. Display current date & time
// function displayCurrentDateTime() {
//     var currentDateTime = new Date();
//     console.log(currentDateTime.toString());
// }

// // 2. Greet user with full name
// function greetUser(firstName, lastName) {
//     alert("Hello, " + firstName + " " + lastName + "!");
// }

// // 3. Add two numbers
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// // 4. Calculator
// function calculate(num1, num2, operator) {
//     switch(operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num1 / num2;
//         default:
//             return "Invalid operator";
//     }
// }

// // 5. Square of a number
// function square(num) {
//     return num * num;
// }

// // 6. Factorial of a number
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }

// // 7. Counting numbers from start to end
// function countNumbers(start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }

// // 8. Compute hypotenuse of a right angle triangle
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//         return x * x;
//     }
//     return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
// }

// // 9. Calculate area of a rectangle
// function calculateRectangleArea(width, height) {
//     return width * height;
// }

// // 10. Check if a string is palindrome
// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// // 11. Convert first letter of each word to uppercase
// function capitalizeWords(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// // 12. Find longest word in a string
// function longestWord(str) {
//     var words = str.split(" ");
//     Here's a JavaScript program containing functions to fulfill each of the requirements:

