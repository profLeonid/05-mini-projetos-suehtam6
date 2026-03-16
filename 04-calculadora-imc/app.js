'use scrict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo', 'pesoNormal', 'sobrePeso', 'obesidade1', 'obesidade2', 'obesidade3')
}

function calcularIMC() {
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    const resultado = document.getElementById('resultado')

    let pesoImc = Number(peso.value)
    let alturaImc = Number(altura.value)
    let alturaMetros = alturaImc / 100
    let calculo = pesoImc / (alturaMetros * alturaMetros)
    removerClasses()

    if (calculo < 18.5) {
        resultado.textContent = 'Abaixo do peso'
        resultado.classList.add('abaixo')
    } else if (calculo < 25) {
        resultado.textContent = 'Peso Normal'
        resultado.classList.add('pesoNormal')
    } else if (calculo < 30) {
        resultado.textContent = 'Sobrepeso'
        resultado.classList.add('sobrePeso')
    } else if (calculo < 35) {
        resultado.textContent = 'Obesidade grau I'
        resultado.classList.add('obesidade1')
    } else if (calculo <= 40) {
        resultado.textContent = 'Obesidade grau II'
        resultado.classList.add('obesidade2')
    } else if (calculo > 40) {
        resultado.textContent = 'Obesidade grau III'
        resultado.classList.add('obesidade3')
    }

}