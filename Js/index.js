const gif = document.querySelector('.gif>img');
const frame = document.querySelector('#frame')
const h1 = [...document.querySelectorAll('h1')];
const btns = document.querySelector('.contBtn')
const footer = document.querySelector('.footer')
const logoRpg= document.querySelector('.rpgLogo')

gif.addEventListener('click',()=>{
    frame.classList.add('toggleFrame')
    h1.forEach((el)=>{
        el.classList.add('toggleShowUp')
    })
    btns.classList.add('toggleShowUp')
    footer.classList.add('toggleShowUp')
})