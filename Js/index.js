// Efeitos para a index

// Seleciona o elemento de imagem dentro da classe 'gif'
const gif = document.querySelector('.gif>img');
// Seleciona o elemento com o ID 'frame'
const frame = document.querySelector('#frame');
// Seleciona todos os elementos <h1> e os transforma em um array
const h1 = [...document.querySelectorAll('h1')];
// Seleciona o contêiner dos botões com a classe 'contBtn'
const btns = document.querySelector('.contBtn');
// Seleciona o elemento com a classe 'footer'
const footer = document.querySelector('.footer');
// Seleciona o logotipo do RPG com a classe 'rpgLogo'
const logoRpg = document.querySelector('.rpgLogo');

// Adiciona um evento de clique no elemento gif
gif.addEventListener('click', () => {
    // Ao clicar no gif, adiciona a classe 'toggleFrame' ao elemento 'frame'
    frame.classList.add('toggleFrame');
    
    // Para cada elemento <h1>, adiciona a classe 'toggleShowUp'
    h1.forEach((el) => {
        el.classList.add('toggleShowUp');
    });

    // Adiciona a classe 'toggleShowUp' aos botões
    btns.classList.add('toggleShowUp');
    
    // Adiciona a classe 'toggleShowUp' ao footer
    footer.classList.add('toggleShowUp');
});
