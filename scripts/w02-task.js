/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Daniel Nkunzimana";
let currentyear = "current year";
let profilepicture = "images/IMG_20221227_125120.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.createElement('image');

/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>${fullname}</strong>';
imageElement.setAttribute('src', profilepicture);
yearElement.textContent = '2023';


/* Step 5 - Array */

let arr = ["fish","ege","pizza", "sweet potetoes", "irish potetoes", "cassava", "pampkin", "yarms"];
for(i=0; i<arr.length; i++)
document.writeln((i+1)+":"+arr[i]);
console.log(arr);
arr.push("rabbit");
arr.shift();
console.log(arr);
arr.push(4, 5);
console.log(arr.join('\\n'));

