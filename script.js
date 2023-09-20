// Pokedex Script Setup
// "D-Von! Get the tables!"

// Global variable to store the chart object
// let chart;

// import pokedex data 

async function fetchData() {
    try {
        const response = await fetch('http://localhost:8000/static/data/pokemon.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        throw error;
    }
}
  
async function processJSONData() {
    try {
        const jsonData = await fetchData();
        if (jsonData) {
        // Use the 'jsonData' variable containing the parsed JSON data here
        //console.log(jsonData);

        // Get the keys of the JSON object
        const keys = Object.keys(jsonData);

        // Create a variable with all the JSON keys
        // const allKeys = keys.join(', ');
    
        console.log(keys);  
        // Add the pokemon names to drop down 
        const dropdown = document.getElementById('pokemon-dropdown-1');

        // Create and add options to the dropdown
        keys.forEach((key) => {
          const option = document.createElement('option');
          option.value = key;
          option.textContent = key;
          dropdown.appendChild(option);
        });

        // Perform any further operations with the JSON data here

        return jsonData;
        }
    } catch (error) {
        // Handle errors from fetchData() here
        console.error('Error processing JSON data:', error);
        throw error;
    }
}
  
// Call the function to start fetching and processing the JSON data
processJSONData()
    .then((jsonData) => {
        // You can use the jsonData variable here or do further processing
        console.log('JSON Data:', jsonData);
    })
    .catch((error) => {
        console.error('Error processing JSON data:', error);
});

  
  
  
  

// $(document).ready(function() {
        
//     // Load initial Pokemon list
//     $.ajax({
//         url: '/pokemon',
//         type: 'GET',
//         success: function(pokemonList) {
//             displayPokemonList(pokemonList);
//             addPokemonToDropdowns(pokemonList);
//         }
//     });

//     // Search bar functionality
//     $('#search-bar').on('input', function() {
//         let query = $(this).val();
//         if(query.length > 0){
//             $.ajax({
//                 url: '/pokemon/' + query,
//                 type: 'GET',
//                 success: function(pokemon) {
//                     displayPokemonDetails(pokemon);
//                 }
//             });
//         }
//     });

//     // Dropdown menu functionality
//     $('#type-dropdown').on('change', function() {
//         let type = $(this).val();
//         $.ajax({
//             url: '/pokemon/type/' + type,
//             type: 'GET',
//             success: function(pokemonList) {
//                 displayPokemonList(pokemonList);
//             }
//         });
//     });

//     // Function to display Pokemon details, including chart
//     function displayPokemonDetails(pokemon) {
//         $('#pokemon-detail-panel').hide().show("slide", { direction: "right" }, 1000);
//         $('#pokemon-name').text(pokemon.name);
//         $('#pokemon-type').text(pokemon.type);
//         $('#pokemon-description').text(pokemon.description);
//         $('#pokemon-image').attr('src', pokemon.image);

//         if(chart) {
//             chart.destroy();
//         }
//         chart = new Chart($('#stat-chart'), {
//             type: 'bar',
//             data: {
//                 labels: Object.keys(pokemon.stats),
//                 datasets: [{
//                     label: 'Stats',
//                     data: Object.values(pokemon.stats),
//                     backgroundColor: 'rgba(255,99,132,0.2)',
//                     borderColor: 'rgba(255,99,132,1)',
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//     }

//     // Function to display a list of Pokemon (e.g., after filtering by type)
//     function displayPokemonList(pokemonList) {
//         $('#pokemon-list').empty();
//         pokemonList.forEach(pokemon => {
//             $('#pokemon-list').append($('<li>').text(pokemon.name));
//         });
//     }

//     // Comparison feature
//     $('#compare-button').on('click', function() {
//         let pokemon1 = $('#pokemon-dropdown-1').val();
//         let pokemon2 = $('#pokemon-dropdown-2').val();

//         $.ajax({
//             url: '/pokemon/' + pokemon1,
//             type: 'GET',
//             success: function(pokemon1Data) {
//                 $.ajax({
//                     url: '/pokemon/' + pokemon2,
//                     type: 'GET',
//                     success: function(pokemon2Data) {
//                         comparePokemon(pokemon1Data, pokemon2Data);
//                     }
//                 });
//             }
//         });
//     });

//     // Function to compare two Pokemon
//     function comparePokemon(pokemon1, pokemon2) {
//         // Comparison logic...
//         // Let's say for simplicity we're just comparing HP
//         let comparisonText = `${pokemon1.name} has ${pokemon1.stats.hp} HP, while ${pokemon2.name} has ${pokemon2.stats.hp} HP.`;
//         $('#comparison-result').text(comparisonText);
//     }

//     // Error handling for AJAX calls
//     $(document).ajaxError(function() {
//         alert('An error occurred while processing your request. Please try again.');
//     });

//     // Add Pokemon to comparison dropdowns
//     function addPokemonToDropdowns(pokemonList) {
//         pokemonList.forEach(pokemon => {
//             $('#pokemon-dropdown-1, #pokemon-dropdown-2').append($('<option>').val(pokemon.name).text(pokemon.name));
//         });
//     }

//     // Reset button
//     $('#reset-button').on('click', function() {
//         // Clear search bar
//         $('#search-bar').val('');

//         // Clear comparison results
//         $('#comparison-result').text('');

//         // Re-render initial Pokemon list
//         $.ajax({
//             url: '/pokemon',
//             type: 'GET',
//             success: function(pokemonList) {
//                 displayPokemonList(pokemonList);
//                 addPokemonToDropdowns(pokemonList);
//             }
//         });
//     });

//     // Click event for the favorite button
//     $('#favorite-button').on('click', function() {
//         let pokemonName = $('#pokemon-name').text();
//         if(!$('#favorites-list').find(`li:contains(${pokemonName})`).length) {
//             $('#favorites-list').append($('<li>').text(pokemonName));
//         } else {
//             alert('This Pokemon is already in your favorites!');
//         }
//     });
// });

