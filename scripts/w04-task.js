/* LESSON 3 - Programming Tasks */

/* Profile Object */

const myProfile = {};
myProfile.name = "Daniel Nkunzimana"; // Replace with your actual name
myProfile.photo = "images/myimage.jpg"; // Replace with your image path
myProfile.favoriteFoods = ["potetoes", "fish", "pampkin", "fruits"]; // Replace with your favorite foods
myProfile.hobbies = ["martial art movie","Reading", "Coding", "Hiking"]; // Replace with your hobbies
myProfile.placesLived = [];

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
  place: "Rulindo",
  length: "6 years"
});
myProfile.placesLived.push({
  place: "Kigali",
  length: "13 years"
});

myProfile.placesLived.push({
  place: "Kamonyi",
  length: "3 years"
});

/* DOM Manipulation - Output */

/* Name */

const nameElement = document.getElementById("name");
nameElement.textContent = myProfile.name;

/* Photo with attributes */

const photoElement = document.getElementById("photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List */

const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
  const foodItem = document.createElement("li");
  foodItem.textContent = food;
  favoriteFoodsList.appendChild(foodItem);
//document.querySelector('# favorite-foods').appendchildId(li);
});

/* Hobbies List */

const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
  const hobbyItem = document.createElement("li");
  hobbyItem.textContent = hobby;
  hobbiesList.appendChild(hobbyItem);
});

/* Places Lived DataList */

const placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
  const placeTerm = document.createElement("dt");
  placeTerm.textContent = place.place;
  const placeDescription = document.createElement("dd");
  placeDescription.textContent = place.length;
  placesLivedList.appendChild(placeTerm);
  placesLivedList.appendChild(placeDescription);
});