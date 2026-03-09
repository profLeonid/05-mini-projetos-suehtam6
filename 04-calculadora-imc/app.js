'use scrict'

function calcularIMC(){
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    const resultado = document.getElementById('resultado')

    let pesoImc = Number(peso.value)
    let alturaImc = Number(altura.value)
    let alturaMetros = alturaImc / 100
    let calculo = pesoImc / (alturaMetros * alturaMetros)

    if(calculo < 18.5){
        resultado.textContent = 'Abaixo do peso'
    }else if(calculo < 25){
        resultado.textContent = 'Peso Normal'
    }else if(calculo < 30){
        resultado.textContent = 'Sobrepeso'
    }else if(calculo < 35){
resultado.textContent = 'Obsidade 1'
    }

}