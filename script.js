let but = document.querySelector('#but')
let dvd = document.querySelector('#lateral')
let aq = document.querySelector('#aa')
let bq = document.querySelector('#bb')
let bod = document.querySelector('body')

let aberto = false


but.addEventListener('click',()=>{
   
    if(aberto){
        dvd.style.left = '-300px'
        but.innerHTML = '&blacktriangleright;'
        aberto = false
    }else{
        dvd.style.left = '0'
        but.innerHTML = '&blacktriangleleft;'
        aberto = true
    }
})


aq.addEventListener('click', ()=>{
    bod.style.setProperty('--corfundo', '#252525')
    bod.style.setProperty('--corlateral', '#3f3f3f')
    dvd.style.setProperty('--letras', 'white')

})
bq.addEventListener('click', ()=>{
    bod.style.setProperty('--corfundo', '#968c7c')
    bod.style.setProperty('--corlateral', '#c0bba5')
    dvd.style.setProperty('--letras','#463f35')
})