/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Daniel Nkunzimana';
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path and name of the image
const profilePicture = 'images/myimage.jpg';

// Example usage
console.log('Current Year:', currentYear);
console.log('Profile Picture Path:', profilePicture);

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.getElementById('profileImage');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['Pizza', 'Sushi', 'Chocolate', 'Burger', 'Rice', 
'Potatoes', 'Fruits','coconuts','peking duck','poutine',
'chocolate','neopolitan pizza','massaman curry','croissant', 
'taco','seafood paella'];

// Modify the HTML element with the id of "food" to display your favorite foods array
foodElement.innerHTML = `My Favorite Foods: ${favoriteFoods.join(', ')}`;

// Declare and instantiate a variable for another single favorite food item
const singleFavoriteFood = 'Ice Cream';

// You can display the single favorite food in the console or anywhere else you'd like
console.log(`Another Favorite Food: ${singleFavoriteFood}`);
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML = `My Favorite Foods: ${favoriteFoods.join(', ')}`;
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
favoriteFoods.shift();

// Update the displayed content of the HTML element with the id of "food"
foodElement.innerHTML = `My Favorite Foods: ${favoriteFoods.join(', ')}`;
favoriteFoods.pop();

// Update the displayed content of the HTML element with the id of "food"
foodElement.innerHTML = `My Favorite Foods: ${favoriteFoods.join(', ')}`;




