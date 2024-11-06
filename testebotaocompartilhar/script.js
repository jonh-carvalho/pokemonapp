const botaoCompartilhar = document.getElementById('compartilhar-whatsapp');
const nomePokemon = 'Pikachu'; // Substitua pelo nome do Pokémon
const urlImagem = 'https://example.com/pikachu.png'; // Substitua pela URL da imagem

botaoCompartilhar.addEventListener('click', () => {
  const mensagem = `Olha que legal esse Pokémon: ${nomePokemon}! ⚡\n${urlImagem}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

  window.open(whatsappUrl, '_blank');
});