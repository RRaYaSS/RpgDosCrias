import {classesObj} from '../configs/constClass.mjs'
import { raceClasses } from '../configs/constClassRace.mjs';
import { percentHigh, percentLow } from '../configs/config.mjs';
import { oneHundred,randomMax } from './functions.mjs';
import { showDescFuncClasse } from './showDescFunctions.mjs';

function genereteClassNotMuchRandom(array,num)
{
    return array[randomMax(num)]
}

export function genereteClass(race,subRace,showDesc,randomClassRace)
{
    let arrayClass= Object.keys(classesObj)
    if(randomClassRace)
    {
        return showDescFuncClasse(showDesc,arrayClass[Math.floor(Math.random()*arrayClass.length)])
    }
    
    let oneHundredVariable=oneHundred()
    let probability = oneHundred();

    let lengthArray = Object.keys(raceClasses[race])
    let{pos,bad,ok,...other}=raceClasses[race]
    if(lengthArray!=1)
    {
        //para os humanos 
        return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(pos,pos.length))
    }
    else if(lengthArray==2)
    {
        //para raças com so pos e bad
        if(oneHundredVariable>=percentHigh)
        {
            return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(bad,bad.length))
        }
        return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(pos,pos.length))
    }
    else if(lengthArray==3)
    {
        //para raças com pos ok e bad
        if(oneHundredVariable>=percentHigh)
        {
            return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(bad,bad.length))
        }else if(probability>=percentHigh &&(subRace=="Anão da Montanha"||subRace=="Robusto"))
        {
            return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(ok,ok.length))

        }else if(probability>=percentLow&&(subRace=="Anão da Colina"||subRace=="Pés Leves"))
        {
            return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(ok,ok.length))    
        }
        return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(pos,pos.length))
    }
    else
    {
        //para os elfos 
        if(oneHundredVariable>=percentHigh)
        {
        return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(bad,bad.length))

        }else if(probability>=percentHigh&&(subRace=="Alto Elfo"||subRace=="Elfo da Floresta"))
        {
            return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(other,other.length))

        }else if(probability>=percentLow&&subRace=="Elfo Negro")
        {
            return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(other,other.length))

        }else if(probability>=percentLow&&subRace!="Elfo Negro")
        {
            return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(ok,ok.length))
        }
        return showDescFuncClasse(showDesc,genereteClassNotMuchRandom(pos,pos.length))
    }   
    

}

