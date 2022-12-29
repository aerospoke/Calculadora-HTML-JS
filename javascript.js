const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btn')
const pResultados= document.querySelector('#resultados')


function btnClick1(){
    const number1 = Number(input1.value)
    const number2 = Number(input2.value)

    const resultado = number1 + number2

    pResultados.innerHTML = resultado
    
}
function btnClick2(){
    const number1 = Number(input1.value)
    const number2 = Number(input2.value)

    const resultado = number1 - number2

    pResultados.innerHTML = resultado
    
}
function btnClick3(){
    const number1 = Number(input1.value)
    const number2 = Number(input2.value)

    const resultado = number1 * number2

    pResultados.innerHTML = resultado
    
}
function btnClick4(){
    const number1 = Number(input1.value)
    const number2 = Number(input2.value)

    const resultado = number1 / number2

    pResultados.innerHTML = resultado
    
}