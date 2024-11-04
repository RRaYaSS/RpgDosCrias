import { genereteName } from './genereteNameV2.mjs'

const gerarNovanmente = document.querySelector('.btn-again')
const spanName = document.querySelector('.spanName')

gerarNovanmente.addEventListener('click',(e)=>{
    e.preventDefault();
    let result = `${genereteName()} ${genereteName()}`
    console.log(result)
    spanName.textContent = result;
    
})
