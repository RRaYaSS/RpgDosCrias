import { aligmentAndDescription } from '../configs/constAligment.mjs';
import { classesObj } from '../configs/constClass.mjs';

// Todas as funções showDesc estão aqui

// Função que retorna a descrição do alinhamento, se solicitado
export function showDescFuncAligment(showDesc, stringAligment) {   
    // Verifica se deve mostrar a descrição
    if (showDesc) { 
        let result = [];
        // Obtém a descrição do alinhamento correspondente
        let descri = aligmentAndDescription[stringAligment];
        // Adiciona o alinhamento e sua descrição ao resultado
        result.push(stringAligment, descri);
        return result; // Retorna o array com alinhamento e descrição
    }
    return stringAligment; // Retorna apenas o alinhamento se a descrição não for mostrada
}

// Função que retorna a descrição da raça e sub-raça, se solicitado
export function showDescFuncRace(showDesc, race, subRaces, geral, desc) {
    let justRaceOrSubRace = []; // Array para armazenar raça ou sub-raça
    let arrayDesc = []; // Array para armazenar descrições

    // Se mostrar descrição e não houver sub-raça
    if (showDesc && subRaces == "") {
        arrayDesc.push(race, geral); // Adiciona a raça e a descrição geral
        return arrayDesc; // Retorna o array
    } 
    // Se mostrar descrição e houver sub-raça
    else if (showDesc) {
        arrayDesc.push(race, geral, subRaces, desc); // Adiciona raça, descrição geral, sub-raça e descrição específica
        return arrayDesc; // Retorna o array
    }
    // Se não mostrar descrição e não houver sub-raça
    else if ((showDesc == false) && subRaces == "") {
        justRaceOrSubRace.push(race); // Adiciona apenas a raça
        return justRaceOrSubRace; // Retorna o array
    }
    // Se não mostrar descrição, mas houver sub-raça
    justRaceOrSubRace.push(race, subRaces); // Adiciona raça e sub-raça
    return justRaceOrSubRace; // Retorna o array
}

// Função que retorna a descrição da classe, se solicitado
export function showDescFuncClasse(showDesc, classe) {
    // Verifica se deve mostrar a descrição
    if (showDesc) {
        let arrayDescClass = []; // Array para armazenar a descrição da classe
        let desc = classesObj[classe]; // Obtém a descrição da classe correspondente
    
        arrayDescClass.push(classe, desc); // Adiciona a classe e sua descrição
        return arrayDescClass; // Retorna o array
    }
    return classe; // Retorna apenas a classe se a descrição não for mostrada
}
