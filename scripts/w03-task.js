/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Function declaration for 'add'
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    var num1 = parseFloat(document.getElementById('add1').value);
    var num2 = parseFloat(document.getElementById('add2').value);

    var result = add(num1, num2);
    document.getElementById('sum').textContent = result;
}
document.getElementById('addButton').addEventListener('click', addNumbers);
function addNumbers() {
    var num1 = parseFloat(document.getElementById('add1').value);
    var num2 = parseFloat(document.getElementById('add2').value);

    if (isNaN(num1) || isNaN(num2)) {
        // Handle the case where the input is not a valid number
        document.getElementById('sum').textContent = 'Invalid input. Please enter numbers.';
    } else {
        var result = add(num1, num2);
        document.getElementById('sum').textContent = result;
    }
}

/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2){
    return subtract1 - subtract2;
}
function subtractnumbers(subtract1, subtract2){
    return subtract1 - subtract2;
    function subtractNumbers() {
        var num1 = parseFloat(document.getElementById('subNum1').value);
        var num2 = parseFloat(document.getElementById('subNum2').value);
        var result = num1 - num2;
        document.getElementById('subResult').textContent = result;
}
}
document.querySelector('#subtractnumbers').addEventListener('click', subtractnumbers);
/* Arrow Function - Multiply Numbers */
function multiply(factor1, factor2){
    return factor1 * factor2;
}
function multiplaynumbers(factor1, factor2){
    return factor1 * factor2;
}
//const multiply = (factor1, factor2) => product;
const multiply = (factor1, factor2) => factor1 * factor2;

function multiplyNumbers() {
    const factor1 = parseFloat(document.getElementById('factor1').value);
    const factor2 = parseFloat(document.getElementById('factor2').value);
    const result = multiply(factor1, factor2);
    document.getElementById('productResult').textContent = result;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
function divideNumbers() {
    const dividend = document.getElementById("dividend").value;
    const divisor = document.getElementById("divisor").value;
    const quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
var myDate = new Date();
// Display the date object in the console
console.log(myDate); // Sun Oct 01 2023 19:52:10 GMT+0300 (East Africa Time)
var currentYear = new Date().getFullYear();
var yearElement = document.getElementById("year");
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArry = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var Element = document.getElementById("arry");
Element.value = numbersArray;

/* Output Odds Only Array */
let oddNumbers = array.filter(number => number % 2 !== 0); // Filter out the even numbers
let oddsElement = document.getElementById("odds"); // Get the HTML element with an ID of odds
oddsElement.innerHTML = oddNumbers.join(", ");
/* Output Evens Only Array */
document.queryselecter('#evens').innerHTML = numbersArry.filter(number => number);
/* Output Sum of Org. Array */
numbersArry.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
numbersArry.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = sum;
const originalArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Display the original array
document.getElementById('array').textContent = originalArray.join(', ');
        // Use filter to find odd and even numbers
        oddNumbers = originalArray.filter(number => number % 2 !== 0);
        const evenNumbers = originalArray.filter(number => number % 2 === 0);

        // Display odd and even numbers
        document.getElementById('odds').textContent = oddNumbers.join(', ');
        document.getElementById('evens').textContent = evenNumbers.join(', ');

        // Use reduce to calculate the sum of array elements
        const sumOfArray = originalArray.reduce((acc, number) => acc + number, 0);

        // Display the sum of array elements
        document.getElementById('sumOfArray').textContent = sumOfArray;

        // Use map to multiply each element by 2
        const multipliedArray = originalArray.map(number => number * 2);

        // Display the multiplied array
        document.getElementById('multiplied').textContent = multipliedArray.join(', ');

        // Use map and reduce to sum the elements after multiplying by 2
        const sumOfMultiplied = multipliedArray.reduce((acc, number) => acc + number, 0);

        // Display the sum of elements after multiplying by 2
        document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
    




