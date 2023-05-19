var btntema = document.getElementById('tema')
var body = document.getElementById('body')

tema.addEventListener("change", function(){
    if(body.classList.contains("noite")){
            body.classList.remove('noite')
    }else{
        body.classList.add('noite')
    }
})
