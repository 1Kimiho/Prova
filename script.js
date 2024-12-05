let but = document.querySelector('#but')
let dvd = document.querySelector('#lateral')

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