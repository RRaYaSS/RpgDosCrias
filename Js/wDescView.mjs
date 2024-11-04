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
const raceDesc = document.querySelector('#raceDesc');
const aligmentDesc = document.querySelector('#aligmentDesc');
const subRaceDesc = document.querySelector('#subRaceDesc');
const vida = document.querySelector('.vida');
const proeficiencia = document.querySelector('.proeficiencia');
const equipamentos = document.querySelector('.equipamentos');
const skills = document.querySelector('.skills');

btn.addEventListener('click', ()=>{
    
    let race='';
    let subRace= '';
    nome.innerHTML =`${genereteName()}  ${genereteName()}`

    let arrayRaceAndSub= genereteRaceAndSubRace(true);
    if(arrayRaceAndSub.length ==2)
    {
        race=arrayRaceAndSub[0]
        raceDesc.innerHTML=arrayRaceAndSub[1]
        subRaceDesc.innerHTML= ` ----------------------------------------------------------------`;
    }else
    {
        race=arrayRaceAndSub[0]
        raceDesc.innerHTML=arrayRaceAndSub[1]
        subRace=arrayRaceAndSub[2]
        subRaceDesc.innerHTML = arrayRaceAndSub[3]

    }
    
    raca.innerHTML= race;
    subRaca.innerHTML= `${subRace == '' ? 'Esta Raça não tem Sub Raça' : subRace}`;


    let arrayClasse=genereteClass(race,subRace,true,check.checked);
    
    classe.innerHTML=arrayClasse[0]
    vida.innerHTML=arrayClasse[1][0]
    proeficiencia.innerHTML=arrayClasse[1][1]
    equipamentos.innerHTML=arrayClasse[1][2]
    skills.innerHTML=arrayClasse[1][3]

    let arrayAligment=genereteAligment(true)
    console.log(arrayAligment)
    aligment.innerHTML=arrayAligment[0]
    aligmentDesc.innerHTML=arrayAligment[1]
    ftRace.style.backgroundImage = ImgRace[race];
})



