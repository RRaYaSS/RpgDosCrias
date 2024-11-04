import { letters } from '../configs/constLetters.mjs';
import { max, min,porcent, porcentDoubleVowel } from '../configs/config.mjs';
import { oneHundred,fifthyFifthyFunc,randomMax } from './functions.mjs';

function isVowelGenerete()
{
    if (fifthyFifthyFunc()==0)
    {
        return false;
    } 
    return true;
}

function doubleVowelFunc()
{
    if(oneHundred()>=porcentDoubleVowel)
    {
        return true;
    }
    return false;
}

function isVowelFunc(randomVog)
{
    return letters.vowel[randomVog];
}

function notVowelFunc(remaining,randomCon,randomCombo)
{
    if((remaining != 1) && (oneHundred()>=porcent) )
    {
        return letters.combo[randomCombo];
        
    }
    if(remaining==1 && (oneHundred()>=porcent))
    {
        return letters.combo[17];
    }       
    return letters.consonant[randomCon];     
}
export function genereteName()
{
    //Para gerar um número aleatório entre dois valores específicos, podemos utilizar a seguinte fórmula
    let lengthName = Math. floor(Math. random() * ((max - min) + 1)) + min;
    let nameArray =[];
    
    let isVowel =isVowelGenerete();
    for(let i =0;i<lengthName;i++)
    {
        let randomVog = randomMax(letters.vowel.length);
        let randomCon = randomMax(letters.consonant.length);
        let randomCombo = randomMax(letters.combo.length);
        let remaining = lengthName - i;           
        let doubleVowel = doubleVowelFunc();      
        if(isVowel || doubleVowel)
        {  
            nameArray.push(isVowelFunc(randomVog));
            doubleVowel=false;
            isVowel=true
        }
        else
        {   
            nameArray.push(notVowelFunc(remaining,randomCon,randomCombo));
        }       
        isVowel = !isVowel ;
    }
    let name =nameArray.join('') ;
    return name;   
}
console.log(genereteName())
