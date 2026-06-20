
async function fetchPokemon() {
    const pokename = document.getElementById(`pokename`).value.toLowerCase();
    document.getElementById("p").textContent = "";
    try{   
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);

    if(!response.ok){
      throw new Error(`Pokemon not found`);
    }

    const resolve = await response.json();
    const pokemonimg = resolve.sprites.front_default;
    const img = document.getElementById(`img`);
    img.src = pokemonimg;
    img.style.display = `block`;
}
    catch(error){
     document.getElementById(`p`).textContent = error;
    };
    
}

document.getElementById(`button`).onclick = fetchPokemon;