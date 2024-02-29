const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const ligEdeslig = document.getElementById('ligEdeslig')
const text = document.getElementById('text')

// aqui pode ser um nome aleatório (na função)

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
}
function lampLigada(){
    if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
        text.innerHTML = 'A lampada está: LIGADA!'
    }
    
}
function lampDesligada(){
    if(!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
        text.innerHTML = 'A lampada está: DESLIGADA!'
    }
}
function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    text.innerHTML = 'A lampada está: QUEBRADA!'
}
function lampOnOff(){
    if(ligEdeslig.textContent == 'Acender'){
        lampLigada();
        ligEdeslig.textContent = 'Apagar';
    }else{
        lampDesligada();
        ligEdeslig.textContent = 'Acender';
    }
}
ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)
lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave', lampDesligada)
lampada.addEventListener('dblclick',lampQuebrada)
ligEdeslig.addEventListener('click', lampOnOff)
