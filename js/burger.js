const burger  = document.querySelectorAll('.burger__nav')
const burgermenu  = document.querySelector('.burger__menu')
const body  = document.querySelector('body')

burger.forEach(item =>{
    item.addEventListener('click',()=>{
    if(!burgermenu.classList.contains('normal')){
        burgermenu.classList.add('normal')
        body.classList.add('noscroll')
    }
    else{
        burgermenu.classList.remove('normal')
        body.classList.remove('noscroll')
    }
})
})
