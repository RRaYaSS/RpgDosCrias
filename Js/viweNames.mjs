import {genereteName} from './genereteNameV2.mjs';

const gerarNovanmente = document.querySelector('.btn-again');
const spanName = document.querySelector('.spanName');
const btnCopy= document.querySelector('.btn-copy');

gerarNovanmente.addEventListener('click',(e)=>{
    e.preventDefault();
    let result = `${genereteName()} ${genereteName()}`
    console.log(result)
    spanName.textContent = result;
    
});

btnCopy.addEventListener('click', ()=>{
    
     let tempInput = document.createElement('textarea');
     tempInput.value = spanName.textContent; 
 
     document.body.appendChild(tempInput);
 
     tempInput.select();
 
     document.execCommand('copy');
 
     document.body.removeChild(tempInput);
});