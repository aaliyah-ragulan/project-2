// create an app object (pokemonGenerator)

const pokemonGenerator = {};

pokemonGenerator.apiURL = "https://pokeapi.co/api/v2/pokemon/";

//create selectors
let pokemonImage = document.querySelector(".generatedImage");
let pokemonName = document.querySelector(".generatedName");
let pokemonType = document.querySelector(".pokemonTypeName");
let pokemonCharacteristic = document.querySelector(".pokemonCharacteristic");
let pokemonAbilities = document.querySelector(".pokemonAbilities");
let pokemonMoves = document.querySelector(".pokemonMoves");
let favouritePokemon = document.querySelector("ul");
let generatorButton = document.querySelector(".generatorBtn");

//initialize preset data
//apiURL
pokemonGenerator.randomizePokemon = Math.floor(Math.random() * 100);

// fetch(`${pokemonGenerator.apiURL}${pokemonGenerator.randomizePokemon}`)
// .then((response) => {
//     return response.json();
// })

// .then((jsonResponse) => {
//     console.log(jsonResponse)

//    // pokemonGenerator.pokemonType = jsonResponse.types[0].type.name
//     pokemonGenerator.pokemonName = jsonResponse.species["name"]
//     console.log(pokemonGenerator.pokemonName)
// })

// Click generates a random pokemon, information is store in a new variable

generatorButton.addEventListener("click", function () {
  fetch(`${pokemonGenerator.apiURL}${pokemonGenerator.randomizePokemon}`)
    .then((response) => {
      return response.json();
    })

    .then((jsonResponse) => {
      console.log(jsonResponse);
      pokemonGenerator.pokemonName = jsonResponse.species["name"];
      let name = pokemonGenerator.pokemonName;
      console.log(name);
      //   let type = pokemonGenerator.console.log(name);
      //pokemonGenerator.pokemonType = jsonResponse.types[0].type.name
      pokemonGenerator.pokemonType = jsonResponse.types[0]["type"]["name"];
      let type = pokemonGenerator.pokemonType;
      console.log(type);

      pokemonGenerator.pokemonImage = jsonResponse.sprites["front_default"];
      let image = pokemonGenerator.pokemonImage;
      console.log(image);

      pokemonGenerator.pokemonMoves = jsonResponse.stats[0]["base_stat"];
      let stats = pokemonGenerator.pokemonMoves;
      console.log(stats);
      //   pokemonGenerator.pokemonCharacteristic =
      //     jsonResponse.[""];
      //   let characteristic = pokemonGenerator.pokemonCharacteristic;
      //   console.log(characteristic);
    });
});

//create event listener on random generator button (grab api data)

//create a method to update pokemon profile and name based on api data
//create a method to insert pokemon key stats based on result
//create event listener to save generated pokemon
//create a method to add generated pokemon to list
//create a method to clear the list
