// Importa as configurações de imagem para as raças e as funções de geração de alinhamento, classe, nome e raça/sub-raça.
import { ImgRace } from "../configs/constImgPerson.mjs";
import { genereteAligment } from "./genereteAlignment.mjs";
import { genereteClass } from "./genereteClass.mjs";
import { genereteName } from "./genereteNameV2.mjs";
import { genereteRaceAndSubRace } from "./genereteRace.mjs";

// Seleciona elementos do DOM para manipular e exibir informações sobre o personagem.
const check = document.querySelector('#check');            // Checkbox para uma opção adicional na geração de classe.
const nome = document.querySelector('.nome');              // Elemento para exibir o nome do personagem.
const classe = document.querySelector('.classe');          // Elemento para exibir a classe do personagem.
const raca = document.querySelector('.raça');              // Elemento para exibir a raça do personagem.
const subRaca = document.querySelector('.subRaça');        // Elemento para exibir a sub-raça do personagem.
const aligment = document.querySelector('.alinhamento');   // Elemento para exibir o alinhamento do personagem.
const btn = document.querySelector('#newPerson');          // Botão para gerar um novo personagem.
const ftRace = document.querySelector('.ftPerson');        // Elemento para exibir a imagem da raça do personagem.

// Adiciona um evento ao botão para gerar um novo personagem quando clicado.
btn.addEventListener('click', () => {

    let race = '';       // Variável para armazenar a raça gerada.
    let subRace = '';    // Variável para armazenar a sub-raça gerada.

    // Gera o nome do personagem concatenando dois nomes aleatórios.
    nome.innerHTML = `${genereteName()} ${genereteName()}`;

    // Gera a raça e a sub-raça (caso exista) do personagem.
    let arrayRaceAndSub = genereteRaceAndSubRace(false);
    
    if (arrayRaceAndSub.length == 1) {
        // Caso a raça não tenha sub-raça, armazena apenas a raça.
        race = arrayRaceAndSub[0];
    } else {
        // Caso tenha sub-raça, armazena tanto a raça quanto a sub-raça.
        race = arrayRaceAndSub[0];
        subRace = arrayRaceAndSub[1];
    }

    // Atualiza os elementos do DOM com a raça e sub-raça geradas.
    raca.innerHTML = race;
    subRaca.innerHTML = `${subRace == '' ? 'Esta Raça não tem Sub Raça' : subRace}`;
    
    // Gera a classe do personagem de acordo com a raça, sub-raça e o estado do checkbox.
    classe.innerHTML = genereteClass(race, subRace, false, check.checked);

    // Gera o alinhamento do personagem.
    aligment.innerHTML = genereteAligment(false);

    // Define a imagem da raça do personagem como plano de fundo no elemento correspondente.
    ftRace.style.backgroundImage = ImgRace[race];
});
