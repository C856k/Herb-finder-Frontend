document.getElementById("searchButton").addEventListener("click",generateText);

function generateText() {
    const userInput = document.getElementById("userInput").value;

 

    const data = {
        prompt: userInput,
        max_tokens: 256
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ${apiKey}'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        const generatedText = result.choices[0].text;
        document.getElementById("output").textContent = generatedText;
    })
    .catch(error => {
        console.error("API error:", error);
    });
}


function searchRecipe() {
    const searchTerm = document.getElementById("searchInput").value;
    fetch(`https://api.example.com/herbs?search=${searchTerm}`)
    .then(response => response.json())
    .then(data => displayHerbResults(data));
}
function displayHerbResults(herbs){
    const resultsDiv = document.getElementById("herbResults");
    resultsDiv.innerHTML = "";
    herbs.forEach(herb => {
        const herbDiv = document.createElement("div");
        herbDiv.innerHTML = `<h2>${herb.name}</h2><p>${herb.description}</p>`;
        resultsDiv.appendChild(herbDiv);
    });

}
