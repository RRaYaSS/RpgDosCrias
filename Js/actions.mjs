import { randomMax } from "./functions.mjs";

export const actions = [
    { value: 0, execute: (keysAtributes1, keysAtributes2, keysAtributes3, result,index1,index2) => { index1=randomMax(keysAtributes1.length)
        index2 = randomMax(keysAtributes1.length)
        while(index1==index2)
        {
            index1=randomMax(keysAtributes1.length)
            index2 = randomMax(keysAtributes1.length)
        }
        result.push(keysAtributes1[index1])
        result.push(keysAtributes1[index2])
        if(randomMax(2)==1)
        {
            result.push(keysAtributes2[randomMax(keysAtributes2.length)])
        }else
        {
            result.push(keysAtributes3[randomMax(keysAtributes3.length)])
        } } },
    { value: 1, execute: (keysAtributes1, keysAtributes2, keysAtributes3, result,index1,index2) => {  index1=randomMax(keysAtributes2.length)
        index2 = randomMax(keysAtributes2.length)
        while(index1==index2)
        {
            index1=randomMax(keysAtributes2.length)
            index2 = randomMax(keysAtributes2.length)
        }
        result.push(keysAtributes2[index1])
        result.push( keysAtributes2[index2])
        if(randomMax(2)==1)
        {
            result.push( keysAtributes1[randomMax(keysAtributes1.length)])
        }else
        {
            result.push(keysAtributes3[randomMax(keysAtributes3.length)])
        } } },
    { value: 2, execute: (keysAtributes1, keysAtributes2, keysAtributes3, result,index1,index2) => {index1=randomMax(keysAtributes3.length)
        index2 = randomMax(keysAtributes3.length)
        while(index1==index2)
        {
            index1=randomMax(keysAtributes3.length)
            index2 = randomMax(keysAtributes3.length)
        }
        result.push( keysAtributes3[index1])
        result.push( keysAtributes3[index2])
        if(randomMax(2)==1)
        {
            result.push( keysAtributes1[randomMax(keysAtributes1.length)])
        }else
        {
            result.push( keysAtributes2[randomMax(keysAtributes2.length)])
        } } }
];