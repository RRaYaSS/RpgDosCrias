import {racesAndSubracesDescription} from '../configs/constRace.mjs'
import { showDescFuncRace } from './showDescFunctions.mjs';

export function genereteRaceAndSubRace(showDesc)
{
    const  races = Object.keys(racesAndSubracesDescription)   
    let selectedRace = races[Math.floor(Math.random()*races.length)];
    const {Geral,...subRaces} = racesAndSubracesDescription[selectedRace]
    const subRacesKeys= Object.keys(subRaces)
    let desc=""
    let stringSubRace=""
    
    if(subRacesKeys.length!=0)
    {     
        let selectedSubRace= subRacesKeys[Math.floor(Math. random() * subRacesKeys.length )]
        stringSubRace=selectedSubRace
        desc= racesAndSubracesDescription[selectedRace][selectedSubRace]
    }

    return showDescFuncRace(showDesc,selectedRace,stringSubRace,Geral,desc)
}

