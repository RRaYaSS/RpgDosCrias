import { ImgRace } from "../configs/constImgPerson.mjs";
import { racesAndSubracesAtributes,SubSheet,numbers,positiveAtributes,sheet } from "../configs/constSheet.mjs";
import { genereteSheet } from "./rpgSheet.mjs";
import { calcBonus } from "./calcBonus.mjs";
//.text-success




const subRacas = {
    "Elfo": ["Alto Elfo", "Elfo da Floresta", "Elfo Negro"],
    "Anões": ["Anão da Colina", "Anão da Montanha"],
    "Gnomo": ["Gnomo da Floresta", "Gnomo das Rochas"],
    "Halfling": ["Pés Leves", "Robusto"]
};

// Seleciona os elementos dos selects
const selectRaca = document.querySelector("#raça");
const selectSubRaca = document.querySelector("#sub-raça");
const selectClass= document.querySelector("#classe");
const ftRace = document.querySelector('.ftPerson');
const sheetBtn = document.querySelector('#sheetBtn');
const divForça =document.querySelector('.força')
const bonusForça =document.querySelector('#bonusForça')
const divConst =document.querySelector('.constituição')
const bonusConst =document.querySelector('#bonusConst')
const divDestreza =document.querySelector('.destreza')
const bonusDestreza =document.querySelector('#bonusDestreza')
const divInt =document.querySelector('.inteligência')
const bonusInt =document.querySelector('#bonusInt')
const divSabedoria =document.querySelector('.sabedoria')
const bonusSabedoria =document.querySelector('#bonusSabedoria')
const divCarisma =document.querySelector('.carisma')
const bonusCarisma =document.querySelector('#bonusCarisma')
const allCol =[...document.querySelectorAll('.pericia')]



// Escuta mudanças no select de raça
selectRaca.addEventListener('change', () =>{
    const racaSelecionada = selectRaca.value;
    // Limpa as opções do select de sub-raça
    selectSubRaca.innerHTML = '<option selected>Escolha a Sub-raça</option>';

    // Verifica se há sub-raças para a raça selecionada
    if (subRacas[racaSelecionada]) {
        // Adiciona as sub-raças correspondentes
        subRacas[racaSelecionada].forEach(sub => {
            const option = document.createElement("option");
            option.value = sub;
            option.textContent = sub;
            selectSubRaca.appendChild(option);
        });
        // Habilita o select de sub-raça
        selectSubRaca.removeAttribute("disabled");
    } else {
        // Desabilita o select de sub-raça caso não haja opções
        selectSubRaca.setAttribute("disabled", true);
    }

    ftRace.style.backgroundImage = ImgRace[racaSelecionada];
});


sheetBtn.addEventListener('click',()=>{
    allCol.forEach(item=>{
     item.classList.remove('text-success')
    
    }
    )
    let arraySheet
 
    if(selectClass.value==="Escolha a Classe"||selectRaca.value==="Escolha a Raça")
        {
            window.alert('Por favor Selecione A raça ou a Classe')
        }
    if(selectSubRaca.value==="Escolha a Sub-raça")
    {

        arraySheet = genereteSheet(selectRaca.value,selectClass.value,sheet,numbers,positiveAtributes,racesAndSubracesAtributes,SubSheet)
    }else 
    {
        arraySheet = genereteSheet(selectSubRaca.value,selectClass.value,sheet,numbers,positiveAtributes,racesAndSubracesAtributes,SubSheet)
    }

    let ficha =arraySheet[0]
    let pericia =arraySheet[1]
    let objKeys= Object.keys(ficha)
    let atributos= objKeys.map(item => ficha[item])

    let calc = calcBonus(atributos)

    divForça.innerHTML = atributos[0]
    divConst.innerHTML = atributos[1]
    divDestreza.innerHTML = atributos[2]
    divInt.innerHTML = atributos[3]
    divSabedoria.innerHTML = atributos[4]
    divCarisma.innerHTML = atributos[5]

    bonusForça.innerHTML =`${calc[0]>0 ? '+'+calc[0]: calc[0]} ` 
    bonusConst.innerHTML = `${calc[1]>0 ? '+'+calc[1]: calc[1]} ` 
    bonusDestreza.innerHTML = `${calc[2]>0 ? '+'+calc[2]: calc[2]} ` 
    bonusInt.innerHTML = `${calc[3]>0 ? '+'+calc[3]: calc[3]} ` 
    bonusSabedoria.innerHTML = `${calc[4]>0 ? '+'+calc[4]: calc[4]} ` 
    bonusCarisma.innerHTML = `${calc[5]>0 ? '+'+calc[5]: calc[5]} ` 

    for(let i =0; i<pericia.length;i++)
    {
        allCol.forEach(item=>{
            if (item.textContent.trim() === pericia[i].trim()) { 
                item.classList.add('text-success');
            }
        }
        )
    }

})