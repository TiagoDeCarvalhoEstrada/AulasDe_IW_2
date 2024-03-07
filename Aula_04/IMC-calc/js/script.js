function opera(){
    var num1 = number(document.getElementById('num1').value)
    var num2 = number(document.getElementById('num2').value)
    var calc = num2 / (num1 * num1)
    resultado.innerHTML = calc
}