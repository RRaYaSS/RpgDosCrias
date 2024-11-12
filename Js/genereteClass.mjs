// Importa as configurações de classes, raças e funções auxiliares para gerar personagens.
import { classesObj } from '../configs/constClass.mjs';  // Objeto contendo as classes disponíveis.
import { raceClasses } from '../configs/constClassRace.mjs';  // Objeto que mapeia as classes às raças.
import { percentHigh, percentLow } from '../configs/config.mjs';  // Percentuais para determinar probabilidades de escolha de classes.
import { oneHundred, randomMax } from './functions.mjs';  // Funções auxiliares para gerar números aleatórios e um número fixo de 100.
import { showDescFuncClasse } from './showDescFunctions.mjs';  // Função para mostrar a descrição da classe escolhida.

// Função que gera uma classe de forma aleatória, mas seguindo algumas regras.
function genereteClassNotMuchRandom(array, num) {
    return array[randomMax(num)];  // Retorna um elemento aleatório do array com base em num.
}

// Função exportada para gerar a classe de um personagem, com base em sua raça e sub-raça.
export function genereteClass(race, subRace, showDesc, randomClassRace) {
    // Obtém as chaves do objeto classesObj, que contém todas as classes.
    let arrayClass = Object.keys(classesObj);

    // Verifica se randomClassRace é verdadeiro; se for, gera uma classe aleatória sem regras.
    if (randomClassRace) {
        return showDescFuncClasse(showDesc, arrayClass[Math.floor(Math.random() * arrayClass.length)]);
    }
    
    // Armazena um número aleatório de 0 a 100.
    let oneHundredVariable = oneHundred();
    // Armazena outro número aleatório de 0 a 100 para probabilidades.
    let probability = oneHundred();

    // Obtém as chaves do objeto raceClasses para a raça fornecida.
    let lengthArray = Object.keys(raceClasses[race]);
    // Desestrutura o objeto raceClasses para acessar os arrays de classes positivas, negativas e neutras.
    let { pos, bad, ok, ...other } = raceClasses[race];

    if (lengthArray != 1) {
        // Para humanos, retorna uma classe positiva aleatória.
        return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(pos, pos.length));
    } else if (lengthArray.length == 2) {
        // Para raças com apenas classes positivas e negativas.
        if (oneHundredVariable >= percentHigh) {
            return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(bad, bad.length));  // Classe negativa se a probabilidade for alta.
        }
        return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(pos, pos.length));  // Caso contrário, classe positiva.
    } else if (lengthArray.length == 3) {
        // Para raças com classes positivas, neutras e negativas.
        if (oneHundredVariable >= percentHigh) {
            return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(bad, bad.length));  // Classe negativa com alta probabilidade.
        } else if (probability >= percentHigh && (subRace == "Anão da Montanha" || subRace == "Robusto")) {
            return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(ok, ok.length));  // Classe neutra para sub-raças específicas.
        } else if (probability >= percentLow && (subRace == "Anão da Colina" || subRace == "Pés Leves")) {
            return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(ok, ok.length));  // Classe neutra para outras sub-raças.
        }
        return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(pos, pos.length));  // Classe positiva se nenhuma condição acima for atendida.
    } else {
        // Para elfos, trata as classes de maneira específica.
        if (oneHundredVariable >= percentHigh) {
            return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(bad, bad.length));  // Classe negativa se a probabilidade for alta.
        } else if (probability >= percentHigh && (subRace == "Alto Elfo" || subRace == "Elfo da Floresta")) {
            return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(other, other.length));  // Classe diferente para sub-raças de elfos específicos.
        } else if (probability >= percentLow && subRace == "Elfo Negro") {
            return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(other, other.length));  // Classe diferente para Elfo Negro.
        } else if (probability >= percentLow && subRace != "Elfo Negro") {
            return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(ok, ok.length));  // Classe neutra para elfos que não são Elfos Negros.
        }
        return showDescFuncClasse(showDesc, genereteClassNotMuchRandom(pos, pos.length));  // Classe positiva se nenhuma condição acima for atendida.
    }
}
