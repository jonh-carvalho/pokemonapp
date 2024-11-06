// Simulação de dados de Pokémon
const pokemonList = [
    { name: 'Pikachu', type: 'Electric', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
    { name: 'Bulbasaur', type: 'Grass/Poison', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
    { name: 'Charmander', type: 'Fire', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
    { name: 'Squirtle', type: 'Water', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
    // Adicione mais Pokémon conforme necessário
  ];
  
  // Elementos da página
  const gallery = document.getElementById('pokemon-gallery');
  const searchInput = document.getElementById('search');
  
  // Função para exibir os Pokémon na galeria
  function displayPokemon(pokemonArray) {
    gallery.innerHTML = ''; // Limpa a galeria
  
    pokemonArray.forEach(pokemon => {
      // Criação do cartão de Pokémon
      const card = document.createElement('div');
      card.classList.add('card');
  
      const img = document.createElement('img');
      img.src = pokemon.image;
      img.alt = pokemon.name;
  
      const name = document.createElement('h2');
      name.textContent = pokemon.name;
  
      const type = document.createElement('p');
      type.textContent = `Type: ${pokemon.type}`;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(type);
      gallery.appendChild(card);
    });
  }
  
  // Exibir todos os Pokémon ao carregar a página
  displayPokemon(pokemonList);
  
  // Função de busca
  function searchPokemon() {
    const query = searchInput.value.toLowerCase();
    const filteredPokemon = pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(query)
    );
    displayPokemon(filteredPokemon);
  }
  
  // Adiciona o evento de busca ao campo de entrada
  searchInput.addEventListener('input', searchPokemon);
  