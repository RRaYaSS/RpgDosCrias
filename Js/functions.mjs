import { oneHundredOne, fifthyFifthy } from "../configs/config.mjs";
export function oneHundred()
{
    return Math.floor(Math.random()*oneHundredOne);
}
export function randomMax(max)
{
    return Math.floor(Math.random()*max);
}  
export function fifthyFifthyFunc()
{
    return Math.floor(Math.random()*fifthyFifthy);
}
