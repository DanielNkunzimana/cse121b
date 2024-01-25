/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function updateResult(result, resultFieldId) {
    document.getElementById(resultFieldId).value = result;
}
function onAddNumbersClick() {
    var num1 = parseFloat(document.getElementById('add1').value);
    var num2 = parseFloat(document.getElementById('add2').value);
    var sum = add(num1, num2);
    updateResult(sum, 'sum');
}
document.getElementById('addNumbers').addEventListener('click', onAddNumbersClick);
/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function onSubtractNumbersClick() {
    var num1 = parseFloat(document.getElementById('subtract1').value);
    var num2 = parseFloat(document.getElementById('subtract2').value);
    var difference = subtract(num1, num2);
    updateResult(difference, 'difference');
}
document.getElementById('subtractNumbers').addEventListener('click', onSubtractNumbersClick);
/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

document.getElementById("multiplyNumbers").addEventListener("click", function () {
    const factor1 = parseFloat(document.getElementById("factor1").value);
    const factor2 = parseFloat(document.getElementById("factor2").value);

    const product = multiply(factor1, factor2);

    document.getElementById("product").value = product;
});

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    // Check if the divisor is not zero to avoid division by zero
    if (number2 !== 0) {
        return number1 / number2;
    } else {
        return "Cannot divide by zero";
    }
}

function onDivideNumbersClick() {
    var num1 = parseFloat(document.getElementById('dividend').value);
    var num2 = parseFloat(document.getElementById('divisor').value);
    var quotient = divide(num1, num2);
    updateResult(quotient, 'quotient');
}
document.getElementById('divideNumbers').addEventListener('click', onDivideNumbersClick);
/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function () {
    // Declare and instantiate a variable to store the numeric value entered by the user
    const subtotal = parseFloat(document.getElementById("subtotal").value);

    // Check if the membership checkbox is checked
    const isMember = document.getElementById("member").checked;

    // Apply a 20% discount if the user is a club member
    const discount = isMember ? 0.2 : 0;

    // Calculate the total amount
    const total = subtotal - subtotal * discount;

    // Output the total to the total span with two decimals using a template string
    document.getElementById("total").textContent = `$ ${total.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Assign the value of the array variable to the HTML element with an ID of array
document.getElementById("array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById("odds").textContent = oddNumbers.join(", ");

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers.join(", ");

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
// Use the map() array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of multiplied
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray.join(", ");
/* Output Sum of Multiplied by 2 Array */
// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Assign the result to the HTML element with an ID of sumOfMultiplied
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
