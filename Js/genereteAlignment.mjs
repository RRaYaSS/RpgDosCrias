import {aligmentAndDescription} from '../configs/constAligment.mjs'
import {randomMax} from './functions.mjs'
import { showDescFuncAligment } from './showDescFunctions.mjs'

export function genereteAligment(showDesc)
{   
    let arrayAligment = Object.keys(aligmentAndDescription)
    let stringAligment = arrayAligment[randomMax(arrayAligment.length)]

    return showDescFuncAligment(showDesc,stringAligment)
}