var btntema = document.getElementById('tema')
var body = document.getElementById('body')
var btnabrir = document.getElementById('abrirpopup')
var btnfechar = document.getElementsByClassName('fechar-popup')[0]
tema.addEventListener("change", function(){
    if(body.classList.contains("noite")){
            body.classList.remove('noite')
    }else{
        body.classList.add('noite')
    }
})
btnabrir.addEventListener('click', function(){
    wrapper = document.getElementsByClassName('popup-wrapper')[0]
    wrapper.style.display = 'flex'
})
btnfechar.addEventListener('click', function(){
    wrapper = document.getElementsByClassName('popup-wrapper')[0]
    wrapper.style.display = 'none'
})
