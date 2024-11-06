const gallery = document.querySelector('.gallery');

// Dados dos cards (pode ser obtido de uma API ou outro local)
const cardsData = [
    { title: 'Card 1', image: 'image1.jpg' },
    { title: 'Card 2', image: 'image2.jpg' },
    { title: 'Card 1', image: 'image1.jpg' },
    { title: 'Card 2', image: 'image2.jpg' },
    { title: 'Card 1', image: 'image1.jpg' },
    { title: 'Card 2', image: 'image2.jpg' },
    { title: 'Card 1', image: 'image1.jpg' },
    { title: 'Card 2', image: 'image2.jpg' },
    { title: 'Card 1', image: 'image1.jpg' },
    { title: 'Card 2', image: 'image2.jpg' },
    { title: 'Card 1', image: 'image1.jpg' },
    { title: 'Card 2', image: 'image2.jpg' },
    // ... e assim por diante
];

// Função para criar um card
function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = data.title;

    const image = document.createElement('img');
    image.src = data.image;
    image.alt = data.title;

    card.appendChild(title);
    card.appendChild(image);
    return card;
}

// Criando os cards e adicionando à galeria
cardsData.forEach(data => {
    const cardElement = createCard(data);
    gallery.appendChild(cardElement);
});