// create an app object (pokemonGenerator)

const pokemonGenerator = {};

pokemonGenerator.apiURL = "https://pokeapi.co/api/v2/pokemon/";

//create selectors
let pokemonImage = document.querySelector(".generatedImage");
let pokemonName = document.querySelector(".generatedName");
let pokemonType = document.querySelector(".pokemonTypeName");
let pokemonNumber = document.querySelector(".pokemonNumber");
let pokemonAbilities = document.querySelector(".pokemonAbilities");
let pokemonMoves = document.querySelector(".pokemonMoves");
let favouritePokemon = document.querySelector(".favList");
let generatorButton = document.querySelector(".generatorBtn");
let list = document.querySelector(".list");

let favButton = document.querySelector(".favBtn");

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

generatorButton.addEventListener("click", function (event) {
  //prevents refresh
  event.preventDefault();
  //console.log("click");

  //grabs api data
  fetch(`${pokemonGenerator.apiURL}${pokemonGenerator.randomizePokemon}`)
    //returns promise
    .then((response) => {
      return response.json();
    })
    //parses json
    .then((jsonResponse) => {
      // console.log(jsonResponse);
      pokemonGenerator.pokemonName = jsonResponse.species["name"];
      let name = pokemonGenerator.pokemonName;

      pokemonName.innerHTML = name;

      //   let type = pokemonGenerator.console.log(name);
      //pokemonGenerator.pokemonType = jsonResponse.types[0].type.name
      pokemonGenerator.pokemonType = jsonResponse.types[0]["type"]["name"];
      let type = pokemonGenerator.pokemonType;
      //console.log(type
      pokemonType.innerHTML = type;

      //grabs image
      pokemonGenerator.pokemonImage = jsonResponse.sprites["front_default"];
      let image = pokemonGenerator.pokemonImage;
      let pokeImage = document.createElement("img");
      pokeImage.src = image;
      pokemonImage.append(pokeImage);

      //grabs move
      pokemonGenerator.pokemonMoves = jsonResponse.moves[0]["move"]["name"];
      let stats = pokemonGenerator.pokemonMoves;
      pokemonMoves.innerHTML = stats;

      //grabs number
      pokemonGenerator.pokemonNumber = jsonResponse.order;
      let pokeNumber = pokemonGenerator.pokemonNumber;
      pokemonNumber.innerHTML = pokeNumber;

      //grabs ability
      pokemonGenerator.pokemonAbilities =
        jsonResponse.abilities[0]["ability"]["name"];
      let abilities = pokemonGenerator.pokemonAbilities;
      pokemonAbilities.innerHTML = abilities;

      //method to save pokemon, fav button functionality
      favButton.addEventListener("click", function (event) {
        event.preventDefault();
        // favouritePokemon.appendChild(document.createTextNode(name));
        // console.log(name);
        let txt = name;
        li = document.createElement("li");
        li.innerHTML = "";

        if (li) {
          li.innerHTML = txt;
          list.insertBefore(li, list.childNodes[0]);
          console.log("it works");
        } else {
          console.log("doesnt work");
        }

        // var myNodelist = document.getElementsByTagName("LI");
        // var i;
        // for (i = 0; i < myNodelist.length; i++) {
        //   var span = document.createElement("SPAN");
        //   var txt = document.createTextNode("\u00D7");
        //   span.className = "close";
        //   span.appendChild(txt);
        //   myNodelist[i].appendChild(span);

        // if (((list.childNodes = 1), list.childNodes.length < 3)) {
        //   console.log("less than 3");
        // } else {
        //   console.log("more than 3!");
        // }
        // // if ((li < 4, li++)) {
        // // }
        // console.log(list);
      });
    });
});

//create event listener on save pokemon button (grab api data outputted)

//create event listener on random generator button (grab api data)

//create a method to update pokemon profile and name based on api data
//create a method to insert pokemon key stats based on result
//create event listener to save generated pokemon
//create a method to add generated pokemon to list
//create a method to clear the list
