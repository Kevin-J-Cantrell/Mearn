const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
const pkmnIds = pokémon.filter(p => p.id);

// const pkmonIds = pokémon.filter(p => p.id >99).map(p => p.name); // gets from the id 99 and above
// console.log(pkmonIds);

// const pkmn_name = pokémon.map(p => p.name); // gets every name 
// console.log(pkmn_name);

// const bListPkmn = pokémon.filter( p => p.name[0] === "b" );
// console.log(bListPkmn);

// const frListPkmn = pokémon.filter( p => p.types[0] === "fire" );
// console.log(frListPkmn);

// const mrListPkmn = pokémon.filter( p => p.types.length >1 ); //use length
// console.log(mrListPkmn);

// const nameListPkmn = pokémon.filter( p => p.name[0] === "name" ); 
// console.log(nameListPkmn);

// const frListPkmn = pokémon.filter( p => p.types === "poison" ).map(p => p.name); //grabs just that type
// console.log(frListPkmn);

// const frListPkmn = pokémon.filter( p => p.types[1] === "flying" ).map(p => p.types[0]); // grabs all flying types and returns the first type
// console.log(frListPkmn);

// const frListPkmn = pokémon.filter( p => p.types[0] == "normal" ).length; // normal types and counts the array
// console.log(frListPkmn);