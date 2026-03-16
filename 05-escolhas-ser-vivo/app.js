'use strict'

function removerClasse(){
    let classe = document.getElementById('escolha2')

    classe.textContent = ''
}

function Escolha(){
    const escolha = document.getElementById('select').value
    removerClasse()

    if(escolha == 'vertebrado'){
        classeVertebrado()
    }else if(escolha == 'Invertebrado'){
        classeInvertebrado()
    }
    
}

function classeVertebrado(){
    let classe = document.getElementById('escolha2')

    let caixaAve = document.createElement('option')
    caixaAve.value = 'ave'
    caixaAve.textContent = 'AVE'

    let caixaMamifero = document.createElement('option')
    caixaMamifero.value = 'mamifero'
    caixaMamifero.textContent = 'MAMIFERO'
    
    

    classe.appendChild(caixaAve)
    classe.appendChild(caixaMamifero)

}

function classeInvertebrado(){
    let classe = document.getElementById('escolha2')

    let caixaInseto = document.createElement('option')
    caixaInseto.value = 'inseto'
    caixaInseto.textContent = 'INSETO'

    let caixaAnelideo = document.createElement('option')
    caixaAnelideo.value = 'anelideo'
    caixaAnelideo.textContent = 'ANELIDEO'
    

    classe.appendChild(caixaInseto)
    classe.appendChild(caixaAnelideo)
    
}