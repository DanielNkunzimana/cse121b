// Function declaration for 'add'
function add() {
    var number1 = document.getElementById("add1").innerHTML
    var number2 = document.getElementById("add2").innerHTML
    var sum = parseInt(number1) + parseInt(number2)
    console.log(sum)
    var cont = document.getElementById("sum").innerText
    console.log(cont)
    
}
add();
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
addNumbers();
document.getElementById('addButton').addEventListener('click', function (event) {
    if (event.target.id === 'addButton') {
        addNumbers();
    }
});

// Function definition for subtraction
function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers() {
    var num1 = parseFloat(document.getElementById('subtract1').value);
    var num2 = parseFloat(document.getElementById('subtract2').value);

    if (isNaN(num1) || isNaN(num2)) {
        // Handle the case where the input is not a valid number
        document.getElementById('difference').textContent = 'Invalid input. Please enter numbers.';
    } else {
        var result = subtract(num1, num2);
        document.getElementById('difference').textContent = result;
    }
}
subtractNumbers();
document.getElementById('subtractButton').addEventListener('click', function (event) {
    if (event.target.id === 'subtractButton') {
        subtractNumbers();
    }
});

// Function definition for multiplication
function multiply(factor1, factor2) {
    return factor1 * factor2;
}

function multiplyNumbers() {
    var factor1 = parseFloat(document.getElementById('factor1').value);
    var factor2 = parseFloat(document.getElementById('factor2').value);

    if (isNaN(factor1) || isNaN(factor2)) {
        // Handle the case where the input is not a valid number
        document.getElementById('product').textContent = 'Invalid input. Please enter numbers.';
    } else {
        var result = multiply(factor1, factor2);
        document.getElementById('product').textContent = result;
    }
}
multiplyNumbers();
document.getElementById('multiplyButton').addEventListener('click', function (event) {
    if (event.target.id === 'multiplyButton') {
        multiplyNumbers();
    }
});

// Function definition for division
function divide(dividend, divisor) {
    return dividend / divisor;
}

function divideNumbers() {
    var dividend = parseFloat(document.getElementById('dividend').value);
    var divisor = parseFloat(document.getElementById('divisor').value);

    if (isNaN(dividend) || isNaN(divisor) || divisor === 0) {
        // Handle the case where the input is not a valid number or divisor is 0
        document.getElementById('quotient').textContent = 'Invalid input. Please enter valid numbers and a non-zero divisor.';
    } else {
        var result = divide(dividend, divisor);
        document.getElementById('quotient').textContent = result;
    }
}
divideNumbers();
document.getElementById('divideButton').addEventListener('click', function (event) {
    if (event.target.id === 'divideButton') {
        divideNumbers();
    }
});
