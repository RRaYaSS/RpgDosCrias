export function showDescFuncAligment(showDesc,result)
{
    if(showDesc)
    {
        let descri = aligmentAndDescription[stringAligment]
        result= `Seu alinhamento é : ${stringAligment}\nDescrição:\n ${descri}`
        return result
    }
    return result
}
export function showDescFuncRace(showDesc,race,subRaces,geral,desc)
{
    let justRaceOrSubRace=[]
    let arrayDesc=[]
    if(showDesc && subRaces=="")
    {
        arrayDesc.push(race,geral)
        return arrayDesc

    }else if(showDesc)
    {
        arrayDesc.push(race,geral,subRaces,desc)
        return arrayDesc

    }
    else if((showDesc==false) && subRaces=="")
    {
        justRaceOrSubRace.push(race)
        return justRaceOrSubRace

    }
    justRaceOrSubRace.push(race,subRaces)
    return justRaceOrSubRace

}
export function showDescFuncClasse(showDesc,classe)
{
    if(showDesc)
    {
        let arrayDescClass=[]
        let desc=classesObj[classe]
    
        arrayDescClass.push(classe,desc)
        return arrayDescClass
    }
    return classe
}
