let tikOne = document.querySelector('.tik1')

tikOne.addEventListener('click', () => {
    document.body.style.background = 'violet'
})

let tikTwo = document.querySelector('.tik2')

tikTwo.addEventListener('click', () => {
    document.body.style.background = "rgb(241, 235, 120)"
})

let tikThree = document.querySelector('.tik3')

tikThree.addEventListener('click', () => {
    document.body.style.background = 'mediumaquamarine'
})

let tikFore = document.querySelector('.tik4')

tikFore.addEventListener('click', () => {
    document.body.style.background = 'grey'
})

let tikFive = document.querySelector('.tik5')

tikFive.addEventListener('click', () => {
    document.body.style.background = 'white'
})

let quadrats = document.querySelectorAll('.quadrat');
let tikTwoOne = document.querySelector('.tik21');
let tikTwoTwo = document.querySelector('.tik22');
let tikTwoThree = document.querySelector('.tik23');
let tikTwoFore = document.querySelector('.tik24');
let tikTwoFive = document.querySelector('.tik25');

quadrats.forEach((el) => {
    tikTwoOne.addEventListener('click', () => {
        el.style.background = 'violet'        
        })
    tikTwoTwo.addEventListener('click', () => {    
            el.style.background = 'rgb(241, 235, 120)'
        })
    tikTwoThree.addEventListener('click', () => {    
        el.style.background = 'mediumaquamarine'
        })
    tikTwoFore.addEventListener('click', () => {    
        el.style.background = 'grey'
        })
    tikTwoFive.addEventListener('click', () => {    
        el.style.background = 'white'
        })
    })

