// Importa o objeto que contém os alinhamentos e suas descrições a partir do arquivo de configuração.
import { aligmentAndDescription } from '../configs/constAligment.mjs'; 
// Importa a função que gera um número aleatório dentro de um intervalo específico.
import { randomMax } from './functions.mjs';
// Importa a função que mostra a descrição do alinhamento.
import { showDescFuncAligment } from './showDescFunctions.mjs';

// Função exportada para gerar o alinhamento dos personagens, com a opção de mostrar ou não as descrições.
export function genereteAligment(showDesc) {   
    // Obtém as chaves do objeto aligmentAndDescription, que representam os diferentes alinhamentos disponíveis.
    let arrayAligment = Object.keys(aligmentAndDescription);
    // Gera um alinhamento aleatório selecionando uma chave do array.
    let stringAligment = arrayAligment[randomMax(arrayAligment.length)];
    // Passa o parâmetro showDesc e o alinhamento selecionado para a função showDescFuncAligment e retorna o resultado dela.
    return showDescFuncAligment(showDesc, stringAligment);
}
