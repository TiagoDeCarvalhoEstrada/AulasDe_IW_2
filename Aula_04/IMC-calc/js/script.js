function calc(){
    var pes = parseFloat(document.getElementById('pes').value)
    var alt = parseFloat(document.getElementById('alt').value)
    var calc = pes / (alt * alt)
    result.innerHTML = calc
    diag(calc)
}

function diag(calc){
    var gen = document.getElementById('sx').value
    if(gen == 'masc'){
        if (calc<20){
            diagnostico.innerHTML = 'Abaixo do peso'
        }
        else if(calc >= 20 && calc<25){
            diagnostico.innerHTML = 'Com peso ideal/Normal'
        }
        else if(calc>=25 && calc<30){
            diagnostico.innerHTML = 'Com obesidade leve'
        }
        else if(calc>=30 && calc<35){
            diagnostico.innerHTML = 'Com obesidade de primeiro grau'
        }
        else if(calc>=40){
            diagnostico.innerHTML = 'Com obesidade de terceiro grau'
        }
        else{
            diagnostico.innerHTML = 'Com obesidade de segundo grau'
        }
    }
    else if(gen == 'femi'){
        if (calc<19){
            diagnostico.innerHTML = 'Abaixo do peso'
        }
        else if(calc >= 19 && calc<24){
            diagnostico.innerHTML = 'peso ideal/normal'
        }
        else if(calc>=24 && calc<29){
            diagnostico.innerHTML = 'Com obesidade leve'
        }
        else if(calc>=29 && calc<34){
            diagnostico.innerHTML = 'Com obesidade de primeiro grau'
        }
        else if(calc>=39){
            diagnostico.innerHTML = 'Com obesidade de terceiro grau'
        }
        else{
            diagnostico.innerHTML = 'Com obesidade de segundo grau'
        }
    }
    else{
        diagnosticor.innerHTML = 'Erro de dados'
    }
}

function limpa(){
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    peso.value = ""
    altura.value = ""
    resultado.innerHTML = ""
    diagnostico.innerHTML = ""
}