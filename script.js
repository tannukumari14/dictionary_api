// const readlineSync = require('readline-sync');
// const input = readlineSync.question('Input: ');
// fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(json => {
//         console.log(json);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
////

// const searchInput = document.getElementById("search-bar");
// const searchButton = document.getElementById("go_button");
// const display=document.getElementById("display")


// searchButton.addEventListener("click", function() {
//     let userInput = searchInput.value;
//     console.log("User input:", userInput);

//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
//     .then(response => {response.json();
//     }).then(json => {
//         console.log(json);
//     })
// });

// display.innerHTML=``
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
        display.innerHTML = "";
        
        // Display word and its definitions
        data.forEach(e => {
            const word = e.word;
            const meanings = e.meanings.map(meaning => {
                return meaning.definitions.map(definition => {
                    return `<li>${definition.definition}</li>`;
                }).join('');
            }).join('');
            
            
            display.innerHTML += `
                <div>
                    <h2>${word}</h2>
                    <ul>${meanings}</ul>
                </div>
            `;
        });
    })
    .catch(error => console.error(error));
});



