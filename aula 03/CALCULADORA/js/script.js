var resultado = document.getElementById('resultado')

function opera1(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var ope1 = num1 + num2
    resultado.innerHTML = ope1
}
function opera2(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var ope2 = num1 - num2
    resultado.innerHTML = ope2
}
function opera3(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var ope3 = num1 * num2
    resultado.innerHTML = ope3
}
function opera4(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var ope4 = num1 / num2
    resultado.innerHTML = ope4
}
function limpar(){
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    num1.value = ""
    num2.value = ""
    resultado.innerHTML = "0"
}