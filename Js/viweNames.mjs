import { genereteName } from './genereteNameV2.mjs'
//pegos os elementos html
const gerarNovanmente = document.querySelector('.btn-again')
const btnCopy = document.querySelector('.btn-copy')
const spanName = document.querySelector('.spanName')

//quando clica no gerarNovanmente dispara um evendo
gerarNovanmente.addEventListener('click',(e)=>{
    //previne o comportamento de link
    e.preventDefault();
    //gera o nome 2 vezes e armazena em result
    let result = `${genereteName()} ${genereteName()}`
    // escreve o result no spanName
    spanName.textContent = result;
    
})
btnCopy.addEventListener('click', () => {
    // Criar um elemento de input temporário para copiar o texto
    let tempInput = document.createElement('textarea');
    tempInput.value = spanName.textContent; // Pegando o texto da span

    // Adicionar o input temporário ao corpo do documento
    document.body.appendChild(tempInput);

    // Selecionar o conteúdo do input
    tempInput.select();

    // Executar o comando de cópia
    document.execCommand('copy');

    // Remover o input temporário
    document.body.removeChild(tempInput);
});
