'use strict'

function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('descontoBaixo', 'descontoMedio', 'descontoAlto')
}


function calcularDesconto(){

    const valor     = document.getElementById('valor')
    const desconto  = document.getElementById('desconto')
    const resultado = document.getElementById('resultado')

    let preco       = Number(valor.value)
    let porcentagem = Number(desconto.value)
    let precoFinal  = preco - ((preco /100) * porcentagem)
    let valorEconomizado = preco - precoFinal
    removerClasses()


    if(porcentagem <= 5){
        resultado.textContent = `PREÇO FINAL: ${precoFinal} E VALOR ECONOMIZADO: ${valorEconomizado}`
        resultado.classList.add('descontoBaixo')
        
    }else if(porcentagem <= 10){
        resultado.textContent = `PREÇO FINAL: ${precoFinal} E VALOR ECONOMIZADO: ${valorEconomizado}`
        resultado.classList.add('descontoMedio')
        
    }else if(porcentagem > 10){
        resultado.textContent = `PREÇO FINAL: ${precoFinal} E VALOR ECONOMIZADO: ${valorEconomizado}`
        resultado.classList.add('descontoAlto')
    }
    
}