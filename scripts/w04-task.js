/* LESSON 4 - Programming Tasks */

/* Profile Object  */


/* Populate Profile Object with placesLive objects */
const info = {
    name:'Daniel Nkunzimana',
    
    Photo:'images/IMG_20221227_125120.jpg',
    favoriteFood:["Pizza","rice","eggs"],
    hobbies:["movies","reading","swimming","walking"],
    
    placesLived:[],
    };
   
    
   /* DOM Manipulation - Output */
    
    
    /* Name */
    
    document.getElementById('name').innerHTML = info.name;
    /* Photo with attributes */
    document.getElementById('photo').src= info.Photo;
   
    document.getElementById('photo').alt=info.name;
    /* Favorite Foods List*/

    let data = info.favoriteFood;
      
          let list = document.getElementById("favorite-foods");
      
          data.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
           
    
            list.appendChild(li);
            }); 
    /* Hobbies List */
    let hobbies_data = info.hobbies;
      
          let hobbies_list = document.getElementById("hobbies");
      
          hobbies_data.forEach((items) => {
            let li = document.createElement("li");
            li.innerText = items;
           
    
    hobbies_list.appendChild(li);
    }); 
    
    let p= document.createElement("dt");
    let textp=document.createTextNode(info.placesLived.population);
    p.appendChild(textp);
    p.setAttribute("id", "myDT");
    
    let z = document.createElement("dd");
    let textz= document.createTextNode(info.placesLived.place);
    z.appendChild(textz);
    let k = document.createElement("dd");
    let textk = document.createTextNode(info.placesLived.length);
    k.appendChild(textk);
    let h= document.createElement("dd");
    let texth = document.createTextNode(info.placesLived.population);
    h.appendChild(texth);
    
    /* Places Lived DataList */
    



    // Get the dl element by its id
    var dl = document.getElementById("places-lived");

// Create a dt element for the term
    var dt = document.createElement("dt");
// Set the text content of the dt element
    dt.textContent = "Rwanda";

// Create a dd element for the definition
    var dd = document.createElement("dd");
// Set the text content of the dd element
    dd.textContent = "A landlocked country in East Africa with a green, mountainous landscape.";

// Append the dt and dd elements to the dl element
    dl.appendChild(dt);
    dl.appendChild(dd);


    var placesLived = [
        {city: "Kigali", country: "Rwanda", years: 2},
        {city: "Nairobi", country: "Kenya", years: 3},
        {city: "Cape Town", country: "South Africa", years: 1}
      ];
      console.log(placesLived);
