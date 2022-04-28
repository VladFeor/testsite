const burger  = document.querySelectorAll('.burger__nav')
const burgermenu  = document.querySelector('.burger__menu')
const body  = document.querySelector('body')
const main  = document.querySelector('.main')
const ad  = document.querySelector('.ad')


console.log('connect!')



if(main != null){
    main.addEventListener('click',()=>{
    if(!burgermenu.classList.contains('normal')){
     
    }
    else{
        burgermenu.classList.remove('normal')
        body.classList.remove('noscroll')
    }
})

}else{
        ad.addEventListener('click',()=>{
        if(!burgermenu.classList.contains('normal')){
        
        }
        else{
            burgermenu.classList.remove('normal')
            body.classList.remove('noscroll')
        }
    })
}

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
