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
const raceDesc = document.querySelector('#raceDesc');      // Elemento para exibir a descrição da raça.
const aligmentDesc = document.querySelector('#aligmentDesc'); // Elemento para exibir a descrição do alinhamento.
const subRaceDesc = document.querySelector('#subRaceDesc'); // Elemento para exibir a descrição da sub-raça.
const vida = document.querySelector('.vida');              // Elemento para exibir os pontos de vida.
const proeficiencia = document.querySelector('.proeficiencia'); // Elemento para exibir as proficiências.
const equipamentos = document.querySelector('.equipamentos'); // Elemento para exibir os equipamentos.
const skills = document.querySelector('.skills');          // Elemento para exibir as habilidades.

// Adiciona um evento ao botão para gerar um novo personagem quando clicado.
btn.addEventListener('click', ()=>{
    
    let race = '';       // Variável para armazenar a raça gerada.
    let subRace = '';    // Variável para armazenar a sub-raça gerada.

    // Gera o nome do personagem concatenando dois nomes aleatórios.
    nome.innerHTML = `${genereteName()}  ${genereteName()}`;

    // Gera a raça e a sub-raça (caso exista) do personagem.
    let arrayRaceAndSub = genereteRaceAndSubRace(true);
    if (arrayRaceAndSub.length == 2) {
        // Caso a raça não tenha sub-raça, exibe apenas a descrição da raça.
        race = arrayRaceAndSub[0];
        raceDesc.innerHTML = arrayRaceAndSub[1];
        subRaceDesc.innerHTML = `----------------------------------------------------------------`;
    } else {
        // Caso tenha sub-raça, exibe a descrição tanto da raça quanto da sub-raça.
        race = arrayRaceAndSub[0];
        raceDesc.innerHTML = arrayRaceAndSub[1];
        subRace = arrayRaceAndSub[2];
        subRaceDesc.innerHTML = arrayRaceAndSub[3];
    }
    
    // Atualiza os elementos do DOM com a raça e sub-raça geradas.
    raca.innerHTML = race;
    subRaca.innerHTML = `${subRace == '' ? 'Esta Raça não tem Sub Raça' : subRace}`;

    // Gera a classe do personagem de acordo com a raça, sub-raça e o estado do checkbox.
    let arrayClasse = genereteClass(race, subRace, true, check.checked);
    
    // Atualiza o DOM com a classe e informações adicionais como vida, proficiências, equipamentos e habilidades.
    classe.innerHTML = arrayClasse[0];
    vida.innerHTML = arrayClasse[1][0];
    proeficiencia.innerHTML = arrayClasse[1][1];
    equipamentos.innerHTML = arrayClasse[1][2];
    skills.innerHTML = arrayClasse[1][3];

    // Gera o alinhamento do personagem e sua descrição.
    let arrayAligment = genereteAligment(true);
    console.log(arrayAligment);
    aligment.innerHTML = arrayAligment[0];
    aligmentDesc.innerHTML = arrayAligment[1];

    // Define a imagem da raça do personagem como plano de fundo no elemento correspondente.
    ftRace.style.backgroundImage = ImgRace[race];
});
