'use scrict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'media', 'reprovado')
}

function calcularMedia(){
    const valor1 = document.getElementById('n1')
    const valor2 = document.getElementById('n2')
    const valor3 = document.getElementById('n3')
    const resultado = document.getElementById('resultado')

    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)
    let n3 = Number(valor3.value)
    let calculo = (n1 + n2 + n3) /3
    removerClasses()

    if(calculo >= 7){
        resultado.textContent = 'APROVADO'
        resultado.classList.add('aprovado')
    }else if(calculo >= 5){
        resultado.textContent = 'MÉDIA'
        resultado.classList.add('media')
    }else if(calculo < 5){
        resultado.textContent = 'REPROVADO'
        resultado.classList.add('reprovado')
    }




}