import { oneHundredOne, fifthyFifthy } from "../configs/config.mjs";
//funçoes usadas em varios partes do projeto

// retorna um numero de 0 a 100
export function oneHundred()
{
    return Math.floor(Math.random()*oneHundredOne);
}
//retorna um numero de 0 ate max, que é recebido pela função 
export function randomMax(max)
{
    return Math.floor(Math.random()*max);
}  
// retorna um numero de 0 ou  1
export function fifthyFifthyFunc()
{
    return Math.floor(Math.random()*fifthyFifthy);
}
