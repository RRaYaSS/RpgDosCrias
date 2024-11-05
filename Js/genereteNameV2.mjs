// Importa constantes e funções necessárias para a geração de nomes.
import { letters } from '../configs/constLetters.mjs'; // Letras usadas na geração de nomes.
import { max, min, porcent, porcentDoubleVowel } from '../configs/config.mjs'; // Limites e porcentagens para a geração de nomes.
import { oneHundred, fifthyFifthyFunc, randomMax } from './functions.mjs'; // Funções auxiliares para gerar números aleatórios e outros cálculos.

// Função que determina se deve gerar uma vogal (50% de chance).
function isVowelGenerete() {
    if (fifthyFifthyFunc() == 0) { // Chama uma função que retorna 0 ou 1.
        return false; // Se o resultado for 0, não gera vogal.
    }
    return true; // Caso contrário, gera vogal.
}

// Função que determina se uma vogal deve ser dobrada com base em uma porcentagem definida.
function doubleVowelFunc() {
    if (oneHundred() >= porcentDoubleVowel) { // Compara um número aleatório com a porcentagem para dobrar vogais.
        return true; // Retorna true se a condição for atendida.
    }
    return false; // Retorna false se a condição não for atendida.
}

// Função que verifica se o índice fornecido corresponde a uma vogal.
function isVowelFunc(randomVog) {
    return letters.vowel[randomVog]; // Retorna a vogal correspondente ao índice.
}

// Função que gera uma consoante ou uma combinação com base em condições.
function notVowelFunc(remaining, randomCon, randomCombo) {
    // Se ainda houver mais de uma letra a ser gerada e um número aleatório for maior que a porcentagem, gera uma combinação.
    if ((remaining != 1) && (oneHundred() >= porcent)) {
        return letters.combo[randomCombo]; // Retorna uma combinação de letras.
    }
    // Se restar apenas uma letra e a condição for atendida, retorna um caractere específico.
    if (remaining == 1 && (oneHundred() >= porcent)) {
        return letters.combo[17]; // Retorna uma combinação específica para o último caractere.
    }
    return letters.consonant[randomCon]; // Caso contrário, retorna uma consoante.
}

// Função exportada para gerar um nome aleatório.
export function genereteName() {
    // Gera um comprimento de nome aleatório entre min e max.
    let lengthName = Math.floor(Math.random() * ((max - min) + 1)) + min;
    let nameArray = []; // Array para armazenar os caracteres do nome gerado.
    
    // Determina se a primeira letra será uma vogal ou não.
    let isVowel = isVowelGenerete();
    // Loop para gerar o nome com o comprimento especificado.
    for (let i = 0; i < lengthName; i++) {
        // Gera índices aleatórios para vogais, consoantes e combinações.
        let randomVog = randomMax(letters.vowel.length);
        let randomCon = randomMax(letters.consonant.length);
        let randomCombo = randomMax(letters.combo.length);
        let remaining = lengthName - i; // Número de letras restantes a serem geradas.
        let doubleVowel = doubleVowelFunc(); // Verifica se uma vogal deve ser dobrada.
        
        // Se deve gerar uma vogal ou se uma vogal dobrada foi determinada.
        if (isVowel || doubleVowel) {  
            nameArray.push(isVowelFunc(randomVog)); // Adiciona uma vogal ao array do nome.
            doubleVowel = false; // Reseta o estado da vogal dobrada.
            isVowel = true; // Define que a próxima letra será uma consoante.
        } else {   
            nameArray.push(notVowelFunc(remaining, randomCon, randomCombo)); // Adiciona uma consoante ou combinação.
        }       
        isVowel = !isVowel; // Alterna entre vogal e consoante para a próxima iteração.
    }
    let name = nameArray.join(''); // Junta os caracteres gerados em uma única string.
    return name; // Retorna o nome gerado.
}
console.log(genereteName())
