document.getElementById("search").addEventListener("click", () => {
    const username = document.getElementById("username").value;

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (response.status === 404) {
                return Promise.reject("User not found");
            }
            return response.json();
        })
        .then(data => {
            const results = document.getElementById("results");
            results.innerHTML = `
                <img src="${data.avatar_url}" alt="${data.login}">
                <h2>${data.login}</h2>
                <p>Name: ${data.name || "N/A"}</p>
                <p>Followers: ${data.followers}</p>
                <p>Repositories: ${data.public_repos}</p>
            `;
        })
        .catch(error => {
            const results = document.getElementById("results");
            results.textContent = error;
        });
});
