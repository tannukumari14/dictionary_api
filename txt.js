const searchInput = document.getElementById("search-bar");
const searchButton = document.getElementById("go_button");
const display = document.getElementById("display");

searchButton.addEventListener("click", function() {
    let userInput = searchInput.value;
    console.log("User input:", userInput);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
    .then(response => response.json())
    .then(data => {
        // Clear previous content
        display.innersHTML = "";
        
        // Display word and its definitions
        data.forEach(e => {
            const word = e.word;
            const meanings = e.meanings.map(meaning => {
                return meaning.definitions.map(definition => {
                    return `<li>${definition.definition}</li>`;
                }).join('');
            }).join('');
            
            // const partOfSpeech = entry.meanings.map(meaning => meaning.partOfSpeech);
            // console.log('Part of Speech:', partOfSpeech);

            display.innerHTML += `
                <div>
                    <h2>${word}</h2>
                    <p>Part of Speech: ${partOfSpeech}</p>
                    <ul>${meanings}</ul>
                </div>
            `;
        });
    })
    .catch(error => console.error(error));
});