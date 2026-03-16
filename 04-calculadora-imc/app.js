'use scrict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo', 'pesoNormal', 'sobrepeso', 'obesidade1', 'obesidade2', 'obesidade3')
}

function calcularPesoAltura(peso, altura){
    let alturaMetros = altura / 100
   return peso / (alturaMetros * alturaMetros)
}

function resultadoStatus(imc){
    if(imc <18.5) return 'Abaixo do peso'
    if(imc <25) return 'Peso Normal'
    if(imc <30) return 'Sobrepeso'
    if(imc <35) return 'obesidade grau I'
    if(imc <=40) return 'obesidade grau II'
    if(imc > 40) return 'obesidade grau III'
}

function selecionarCor(imc){
    if(imc <18.5) return 'abaixo'
    if(imc <25) return 'pesoNormal'
    if(imc <30) return 'sobrepeso'
    if(imc <35) return 'obesidade1'
    if(imc <=40) return 'obesidade2'

    return 'obesidade3'
}

function calcularIMC(){
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)
    const resultado = document.getElementById('resultado')

    let imc = calcularPesoAltura(peso, altura)
    let status = resultadoStatus(imc)
    let cor = selecionarCor(imc)
    removerClasses()

    resultado.textContent = `O IMC É ${imc.toFixed(2)} e está ${status}`
    resultado.classList.add(cor)
}
