const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    allowTouchMove: false,
    pagination: {
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".previous"
    },
    
  });
  const quote = document.querySelectorAll('.quote')
  const slide = document.querySelectorAll('.slid')
  const next = document.querySelector('.next')
  const previous = document.querySelector('.previous')
  let slid = 0
  next.addEventListener('click',() =>{
    console.log(quote.length)
    if(quote.length != slid+1){
     slid++
        quote.forEach(item => {
        if(!item.classList.contains('hiden')){
          item.classList.add('hiden')
        }
    })
    slide.forEach(item => {
        if(item.classList.contains('big__slide')){
          item.classList.remove('big__slide')
        }
        })
    quote[slid].classList.remove('hiden')
    slide[slid].classList.add('big__slide')
    }
  })
  previous.addEventListener('click',() =>{
    if(slid != 0){
     slid--
        quote.forEach(item => {
          if(!item.classList.contains('hiden')){
          item.classList.add('hiden')
        }
        })
        slide.forEach(item => {
        if(item.classList.contains('big__slide')){
          item.classList.remove('big__slide')
        }
        })
    }
    quote[slid].classList.remove('hiden')
    slide[slid].classList.add('big__slide')
     
    })
 
    
  
