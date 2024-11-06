# Desenvolver um site html, css e javascript usando fetch baseado na api pokemon

## Plano em Pseudocódigo

Criar a estrutura de arquivos:

- Criar uma pasta para o projeto.
- Criar arquivos index.html, styles.css e script.js.
- Configurar o arquivo HTML:
- Adicionar um formulário para buscar Pokémon pelo nome.
- Adicionar uma área para exibir os dados do Pokémon.
- Incluir referências aos arquivos CSS e JavaScript.
- Estilizar a interface com CSS:
- Adicionar estilos básicos para o formulário e a área de exibição.
- Implementar a lógica com JavaScript:
- Adicionar um evento de submissão ao formulário.
- Usar fetch para fazer requisições à API do Pokémon.
- Processar e exibir os dados recebidos na interface do usuário.

### Código

Passo 1: Criar a estrutura de arquivos

```bash
mkdir pokemon-site
cd pokemon-site
touch index.html styles.css script.js
```

Passo 2: Configurar o arquivo HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Search</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Pokémon Search</h1>
    <form id="pokemon-form">
        <input type="text" id="pokemon-name" placeholder="Enter Pokémon name" required>
        <button type="submit">Search</button>
    </form>
    <div id="pokemon-data"></div>

    <script src="script.js"></script>
</body>
</html>
```

Passo 3: Estilizar a interface com CSS

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

h1 {
    margin-top: 20px;
}

form {
    margin: 20px auto;
}

input, button {
    padding: 10px;
    font-size: 16px;
}

#pokemon-data {
    margin-top: 20px;
}

#pokemon-data img {
    width: 150px;
    height: 150px;
}
```

Passo 4: Implementar a lógica com JavaScript

```js
// script.js
document.getElementById('pokemon-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('pokemon-name').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    
    if (response.ok) {
        document.getElementById('pokemon-data').innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
        `;
    } else {
        document.getElementById('pokemon-data').innerHTML = '<p>Pokémon not found</p>';
    }
});
```

Agora, você pode abrir o arquivo index.html no seu navegador e buscar informações sobre qualquer Pokémon.
