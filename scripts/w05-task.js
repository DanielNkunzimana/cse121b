// Declare a global empty array variable to store a list of temples
        let temples = [];

        // Function to display temple data
        function output(templeArray) {
            templeArray.forEach(element => {
                // Create an HTML <article> element
                const article = document.createElement('article');

                // Create an HTML <h3> element and add the temple's templeName property to it
                const templeName = document.createElement('h3');
                templeName.textContent = element.templeName;

                // Create an HTML <h4> element and add the temple's location property to it
                const location = document.createElement('h4');
                location.textContent = element.location;

                // Create an HTML <h4> element and add the temple's dedicated property to it
                const dedicated = document.createElement('h4');
                dedicated.textContent = element.dedicated;

                // Create an HTML <img> element and add the temple's imageUrl property to the src attribute
                const image = document.createElement('img');
                image.setAttribute('src', element.imageUrl);
                image.setAttribute('alt', element.templeName);

                // Append elements to the <article> element
                article.appendChild(templeName);
                article.appendChild(location);
                article.appendChild(dedicated);
                article.appendChild(image);

                // Append the <article> element to the HTML element with an ID of 'temples'
                document.getElementById('temples').appendChild(article);
            });
        }

        // Function to clear the temple display
        function reset() {
            document.getElementById('temples').innerHTML = '';
        }

        // Function to sort the temples based on user selection
        function sortBy() {
            reset();
            let sortOption = document.getElementById('sortBy').value;
            let sorted;

            if (sortOption === 'templeNameAscending') {
                sorted = temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName));
            } else if (sortOption === 'templeNameDescending') {
                sorted = temples.slice().sort((a, b) => b.templeName.localeCompare(a.templeName));
            }

            output(sorted);
        }

        // Add an event listener to the HTML element with ID 'sortBy'
        document.getElementById('sortBy').addEventListener('change', sortBy);

        // Fetch temple data from a JSON file
        async function getTemples() {
            try {
                let response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
                let templeArray = await response.json();
                temples = templeArray;
                output(templeArray);
            } catch (error) {
                console.error('Error fetching temple data:', error);
            }
        }

        // Call the 'getTemples' function to load temple data
        getTemples();

