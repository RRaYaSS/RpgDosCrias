import { ImgRace } from "../configs/constImgPerson.mjs";
import { genereteAligment } from "./genereteAlignment.mjs";
import { genereteClass } from "./genereteClass.mjs";
import { genereteName } from "./genereteNameV2.mjs";
import { genereteRaceAndSubRace } from "./genereteRace.mjs";
//pegar se o check box esta marcado ou não 
const check = document.querySelector('#check');
const nome = document.querySelector('.nome');
const classe = document.querySelector('.classe');
const raca = document.querySelector('.raça');
const subRaca = document.querySelector('.subRaça');
const aligment = document.querySelector('.alinhamento');
const btn = document.querySelector('#newPerson');
const ftRace = document.querySelector('.ftPerson');

btn.addEventListener('click', ()=>{

    let race='';
    let subRace= '';

    nome.innerHTML =`${genereteName()}  ${genereteName()}`

    let arrayRaceAndSub = genereteRaceAndSubRace(false);
    
    if(arrayRaceAndSub.length == 1)
    {
        race= arrayRaceAndSub[0];
    }else
    {
        race= arrayRaceAndSub[0];
        subRace= arrayRaceAndSub[1];
    }

    raca.innerHTML= race;
    subRaca.innerHTML= `${subRace == '' ? 'Esta Raça não tem Sub Raça' : subRace}`;
    
    classe.innerHTML=genereteClass(race,subRace,false,check.checked);

    aligment.innerHTML = genereteAligment(false);
    ftRace.style.backgroundImage = ImgRace[race];
})



