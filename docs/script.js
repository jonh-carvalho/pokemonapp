// script.js

async function fetchPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
        throw new Error('Pokemon not found');
    }
    return await response.json();
}

document.getElementById('pokemon-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('pokemon-name').value.toLowerCase();
    const data = await fetchPokemon(name);
    document.getElementById('pokemon-data').innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
    `;
});

document.getElementById('type-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const typeName = document.getElementById('type-name').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
    const data = await response.json();
    
    if (response.ok) {
        const pokemonList = data.pokemon.slice(0, 10);
        const gallery = document.getElementById('type-gallery');
        gallery.innerHTML = '';

        for (const pokemon of pokemonList) {
            const pokemonResponse = await fetch(pokemon.pokemon.url);
            const pokemonData = await pokemonResponse.json();
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <div class="gallery-item-inner">
                    <div class="gallery-item-front">
                        <h3>${pokemonData.name}</h3>
                        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                    </div>
                    <div class="gallery-item-back">
                        <h3>${pokemonData.name}</h3>
                        <p>Height: ${pokemonData.height}</p>
                        <p>Weight: ${pokemonData.weight}</p>
                    </div>
                </div>
            `;
            galleryItem.addEventListener('click', () => openModal(pokemonData));
            gallery.appendChild(galleryItem);
        }
    } else {
        document.getElementById('type-gallery').innerHTML = '<p>Type not found</p>';
    }
});

document.getElementById('region-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const regionName = document.getElementById('region-select').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/region/${regionName}`);
    const data = await response.json();
    
    if (response.ok) {
        const pokedexUrl = data.pokedexes[0].url;
        const pokedexResponse = await fetch(pokedexUrl);
        const pokedexData = await pokedexResponse.json();
        const pokemonEntries = pokedexData.pokemon_entries;
        const gallery = document.getElementById('region-list');
        gallery.innerHTML = '';

        for (const entry of pokemonEntries) {
            const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}`);
            const pokemonData = await pokemonResponse.json();
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <div class="gallery-item-inner">
                    <div class="gallery-item-front">
                        <h3>${pokemonData.name}</h3>
                        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                    </div>
                     <div class="gallery-item-back">
                        <!--<h3>${pokemonData.name}</h3>
                        <p>Height: ${pokemonData.height}</p>
                        <p>Weight: ${pokemonData.weight}</p>-->
                    </div> 
                </div>
            `;
            galleryItem.addEventListener('click', () => openModal(pokemonData));
            gallery.appendChild(galleryItem);
        }
    } else {
        document.getElementById('region-list').innerHTML = '<p>Region not found</p>';
    }
});

function openModal(pokemonData) {
    const modal = document.getElementById('pokemon-modal');
    const modalContent = document.getElementById('modal-pokemon-data');
    modalContent.innerHTML = `
        <div class="pokemon-card">
            <h2>${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
            <p>Height: ${pokemonData.height}</p>
            <p>Weight: ${pokemonData.weight}</p>
            <p>Base Experience: ${pokemonData.base_experience}</p>
            <p>Abilities: ${pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p>Types: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
            <p>Moves: ${pokemonData.moves.map(move => move.move.name).join(', ')}</p>
        </div>
    `;
    modal.style.display = 'block';

    const closeModal = document.getElementsByClassName('close')[0];
    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}