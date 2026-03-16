'use scrict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'media', 'reprovado')
}

function calcularNotas(n1, n2, n3){
    
    return (n1 + n2 + n3) /3
}

function resultadoStatus(media){
    if(media >= 7) return 'APROVADO'
    if(media >= 5) return 'RECUPERAÇÃO'
    return 'REPROVADO'
}

function selecionarCor(media){
    if(media >= 7) return 'aprovado'
    if(media >= 5) return 'media'
    return 'reprovado'
}



function calcularMedia(){
    const valor1 = Number(document.getElementById('n1').value)
    const valor2 = Number(document.getElementById('n2').value)
    const valor3 = Number(document.getElementById('n3').value)
    const resultado = document.getElementById('resultado')

    const media = calcularNotas(valor1, valor2, valor3)
    const status = resultadoStatus(media)
    const cor = selecionarCor(media)
    removerClasses()


    resultado.textContent = `A nota do aluno foi ${media.toFixed(2)} e ele foi ${status}`
    resultado.classList.add(cor)
}