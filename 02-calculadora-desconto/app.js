'use strict'

// LÓGICA DO PROFESSOR LEONID

function removerClasses(){
    const resultado = document.getElementById('resultado')
     resultado.classList.remove('descontoBaixo', 'descontoMedio', 'descontoAlto')
}

function calcularValorEconomizado(preco, desconto){
    return preco * desconto /100
}

function calcularPrecoFinal(preco, valorEconomizado){
    return preco - valorEconomizado
}

function selecionarCor(desconto){
    if(desconto <= 5) return 'descontoBaixo'
    if(desconto <= 10) return 'descontoMedio'

    return 'descontoAlto'
}

function calcularDesconto(){
    const preco = Number(document.getElementById('valor').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularPrecoFinal(preco, valorEconomizado)
    const cor = selecionarCor(desconto)
    removerClasses()

    resultado.textContent = ` VALOR ECONOMIZADO: R$${valorEconomizado.toFixed(2)} -  PREÇO FINAL: R$${precoFinal.toFixed(2)}`
    resultado.classList.add(cor)

}




// LÓGICA DO MATHEUS(MINHA)

// function removerClasses(){
//     const resultado = document.getElementById('resultado')
//     resultado.classList.remove('descontoBaixo', 'descontoMedio', 'descontoAlto')
// }


// function calcularDesconto(){

//     const valor     = document.getElementById('valor')
//     const desconto  = document.getElementById('desconto')
//     const resultado = document.getElementById('resultado')

//     let preco       = Number(valor.value)
//     let porcentagem = Number(desconto.value)
//     let precoFinal  = preco - ((preco /100) * porcentagem)
//     let valorEconomizado = preco - precoFinal
//     removerClasses()


//     if(porcentagem <= 5){
//         resultado.textContent = `PREÇO FINAL: ${precoFinal} E VALOR ECONOMIZADO: ${valorEconomizado}`
//         resultado.classList.add('descontoBaixo')
        
//     }else if(porcentagem <= 10){
//         resultado.textContent = `PREÇO FINAL: ${precoFinal} E VALOR ECONOMIZADO: ${valorEconomizado}`
//         resultado.classList.add('descontoMedio')
        
//     }else if(porcentagem > 10){
//         resultado.textContent = `PREÇO FINAL: ${precoFinal} E VALOR ECONOMIZADO: ${valorEconomizado}`
//         resultado.classList.add('descontoAlto')
//     }
    
// }