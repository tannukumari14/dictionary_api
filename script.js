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


// const searchInput = document.getElementById("search-bar");
// const searchButton = document.getElementById("go_button");
// const display = document.getElementById("display");

// searchButton.addEventListener("click", function() {
//     let userInput = searchInput.value;
//     console.log("User input:", userInput);

//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(entry => {
//                 const word = entry.word;
//                 const meanings = entry.meanings.map(meaning => {
//                     return meaning.definitions.map(definition => {
//                         return `<li>${definition.definition}</li>`;
//                     })
//                 })

//                 const partOfSpeech = entry.meanings.map(meaning => meaning.partOfSpeech);

//                 let html = '';
//                 for (let i = 0; i < partOfSpeech.length; i++) {
//                     html += `
//                         <div>
//                             <h2>${word}</h2>
//                             <p>Part of Speech: ${partOfSpeech[i]}</p>
//                             <ul>${meanings[i]}</ul>
//                         </div>
//                     `;
//                 }

//                 display.innerHTML += html;
//             });
//         })
//         .catch(error => console.error(error));
// });


const searchInput = document.getElementById("search-bar");
const searchButton = document.getElementById("go_button");
const display = document.getElementById("display");

searchButton.addEventListener("click", function() {
    let userInput = searchInput.value;
    console.log("User input:", userInput);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
        .then(response => response.json())
        .then(data => {
            display.innerHTML = "";
            data.forEach(entry => {
                const word = entry.word;
                const meanings = entry.meanings;
                for (const meaning of meanings) {
                    const partOfSpeech = meaning.partOfSpeech;
                    display.innerHTML += `<h1>${partOfSpeech}</h1>`;
                    const definitions = meaning.definitions;
                    for (const definition of definitions) {
                        const definitionText = definition.definition;
                        display.innerHTML += `<p>${definitionText}</p>`;
                    }
                }
            });
        });
});

