import { randomMax, oneHundred } from "./functions.mjs"

import { percentHigh } from "../configs/config.mjs";
import { actions } from "./actions.mjs";
// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function remain(array1,array2)
{
    //retira os itens iguais dos arrays 
    return array1.filter(item=>!array2.includes(item))
}
function equals(array1,array2)
{
    //Deixa apenas  os itens iguais dos arrays 
    return array1.filter(item=>array2.includes(item))
}
function arrayForSubAtributes(sheet,sheetKeys)
{

    // Exibe a lista ordenada de atributos

    let objAtributes = sheetKeys
        .filter(key => sheet[key] > 12)
        .map(key => ({ [key]: sheet[key] }));
        objAtributes.sort((a, b) => {
            let keyA = Object.keys(a)[0];
            let keyB = Object.keys(b)[0];
            return sheet[keyB] - sheet[keyA]; // Ordena pelos valores
        });
        
    while(objAtributes.length>3)
        {
            let lastObj = objAtributes[objAtributes.length - 1];
            let penultimotObj = objAtributes[objAtributes.length - 2];
            let lastKey = Object.keys(lastObj)[0];
            let penultimoKey = Object.keys(penultimotObj)[0];
        
            let lastValue = lastObj[lastKey];
            let penultimoValue = penultimotObj[penultimoKey];
            if(lastValue==penultimoValue)
            {
                let teste = randomMax(2)
                if(teste==1)
                {
                    let aux = objAtributes[objAtributes.length - 2]; 
                    objAtributes[objAtributes.length - 2] = objAtributes[objAtributes.length - 1]; 
                    objAtributes[objAtributes.length - 1] = aux;
                    objAtributes.pop()
                }else
                {
                    objAtributes.pop()
                }
            }else
            {
                objAtributes.pop()
            }
        }

    // Retorna o objeto ordenado
    return objAtributes;
    

}

function genereteSubAtributes(array,SubSheet)
{   
    let keysAtributes1 = SubSheet[Object.keys(array[0])]
    let keysAtributes2 = SubSheet[Object.keys(array[1])]
    let keysAtributes3 = SubSheet[Object.keys(array[2])]

    let result = []
    let index1
    let index2

    if(oneHundred()>percentHigh)
    {
        let random = randomMax(3)
        const action = actions.find(action => action.value === random);
        if (action) action.execute(keysAtributes1, keysAtributes2, keysAtributes3, result,index1,index2);
        
        return result 
    }
    result.push(keysAtributes1[randomMax(keysAtributes1.length)])
    result.push(keysAtributes2[randomMax(keysAtributes2.length)])
    result.push(keysAtributes3[randomMax(keysAtributes3.length)])
    return result

}
export function genereteSheet(race,classe,sheet,numbers,positiveAtributes,racesAndSubracesAtributes,SubSheet)
{

    let result = []
    //Pega As cahaves do obj sheet
    let sheetKeys = Object.keys(sheet)
    //zerar a ficha
    for(let i =0;i<sheetKeys.length;i++)
    {
        sheet[sheetKeys[i]]=0
    }
    let arrayAtributes = positiveAtributes[classe]

    // Seleciona os números mais altos conforme o número de atributos da classe e embaralha
    let highNumbers = shuffleArray(numbers.slice(0, arrayAtributes.length));
    //Seleciona os números que sobraram e embaralha
    let lowNunbers = shuffleArray(numbers.slice(arrayAtributes.length, numbers.length));
    
    // Recebe o retorno da função para remover os elementos iguais
    let lastAtributes = remain(sheetKeys,arrayAtributes)

    // Atribui os números embaralhados aos atributos positivos
    for (let i = 0; i < arrayAtributes.length; i++) 
    {
        sheet[arrayAtributes[i]] += highNumbers[i];
    }
    // Atribui os números embaralhados aos atributos que restaram
    for(let i = 0;i<lastAtributes.length;i++)
    {
        sheet[lastAtributes[i]] += lowNunbers[i];
    }

        let raceAtributes = racesAndSubracesAtributes[race]
        let keysRaceAtributes = Object.keys(raceAtributes)
        let equalsAtributes = equals(sheetKeys,keysRaceAtributes)
        //Para Humanos
        if(race=="Humano")
        {
            for(let i =0;i<keysRaceAtributes.length;i++)
            {
                sheet[sheetKeys[i]]+=racesAndSubracesAtributes[race][keysRaceAtributes[i]]
            }
        }else if(race=="Meio-Elfo")
        {
            for(let i =0;i<2;i++)
            {   
                let halfElfAtribute = randomMax(5)
                sheet[equalsAtributes[halfElfAtribute]]+=racesAndSubracesAtributes[race][keysRaceAtributes[halfElfAtribute]]
            }
            sheet[sheetKeys[5]]+=racesAndSubracesAtributes[race][keysRaceAtributes[5]]
        }else
        {
            for(let i =0;i<keysRaceAtributes.length;i++)
            {
                sheet[equalsAtributes[i]]+=racesAndSubracesAtributes[race][keysRaceAtributes[i]]
            }
        }

        result.push(sheet,genereteSubAtributes(arrayForSubAtributes(sheet,sheetKeys),SubSheet))
        return result
}
