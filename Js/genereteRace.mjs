// Importa a descrição de raças e sub-raças a partir do arquivo de configuração.
import { racesAndSubracesDescription } from '../configs/constRace.mjs';
// Importa a função para mostrar a descrição da raça.
import { showDescFuncRace } from './showDescFunctions.mjs';

// Função exportada para gerar uma raça e uma sub-raça, com a opção de mostrar a descrição.
export function genereteRaceAndSubRace(showDesc) {
    // Obtém as chaves do objeto racesAndSubracesDescription, que são as raças disponíveis.
    const races = Object.keys(racesAndSubracesDescription);
    // Sorteia aleatoriamente uma raça entre as disponíveis.
    let selectedRace = races[Math.floor(Math.random() * races.length)];
    // Desestrutura o objeto correspondente à raça selecionada, separando a descrição geral das sub-raças.
    const { Geral, ...subRaces } = racesAndSubracesDescription[selectedRace];
    // Obtém as chaves das sub-raças disponíveis.
    const subRacesKeys = Object.keys(subRaces);
    let desc = ""; // Inicializa uma variável para a descrição da sub-raça.
    let stringSubRace = ""; // Inicializa uma variável para armazenar a sub-raça selecionada.
    
    // Verifica se há sub-raças disponíveis para a raça selecionada.
    if (subRacesKeys.length != 0) {     
        // Sorteia aleatoriamente uma sub-raça entre as disponíveis.
        let selectedSubRace = subRacesKeys[Math.floor(Math.random() * subRacesKeys.length)];
        stringSubRace = selectedSubRace; // Armazena a sub-raça selecionada.
        // Obtém a descrição da sub-raça correspondente à raça selecionada.
        desc = racesAndSubracesDescription[selectedRace][selectedSubRace];
    }
    
    // Retorna o resultado da função showDescFuncRace, que mostra ou não a descrição com base na variável showDesc.
    return showDescFuncRace(showDesc, selectedRace, stringSubRace, Geral, desc);
}