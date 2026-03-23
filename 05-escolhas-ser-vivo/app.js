'use strict'

const select1 = document.getElementById('select')
const select2 = document.getElementById('escolha2')
const select3 = document.getElementById('escolha3')
const resultado = document.getElementById('resultado')


select1.addEventListener('change', Escolha)
select2.addEventListener('change', escolha2Changed)
select3.addEventListener('change', escolha3Changed)

function limparTudo(){
    select2.innerHTML = ''
    select3.innerHTML = ''
}


function limparEscolha3(){
    select3.innerHTML = ''
}

function removerResultado(){
    resultado.textContent = 'O resultado aparecerá aqui'
}



function Escolha(){
    let escolha = select1.value

    limparTudo()

    if(escolha === 'vertebrado'){
        classeVertebrado()
    } 
    else if(escolha === 'invertebrado'){
        classeInvertebrado()
    }
}


function classeVertebrado(){

    let caixaVazia = document.createElement('option')
    caixaVazia.value = ''
    caixaVazia.textContent = 'SELECIONE'

    let ave = document.createElement('option')
    ave.value = 'ave'
    ave.textContent = 'AVE'

    let mamifero = document.createElement('option')
    mamifero.value = 'mamifero'
    mamifero.textContent = 'MAMÍFERO'

    select2.appendChild(caixaVazia)
    select2.appendChild(ave)
    select2.appendChild(mamifero)
}


function classeInvertebrado(){

    let caixaVazia = document.createElement('option')
    caixaVazia.value = ''
    caixaVazia.textContent = 'SELECIONE'

    let inseto = document.createElement('option')
    inseto.value = 'inseto'
    inseto.textContent = 'INSETO'

    let anelideo = document.createElement('option')
    anelideo.value = 'anelideo'
    anelideo.textContent = 'ANELÍDEO'

    select2.appendChild(caixaVazia)
    select2.appendChild(inseto)
    select2.appendChild(anelideo)
}


function escolha2Changed(){
    let valor = select2.value
    removerResultado()
    limparEscolha3()

    if(valor === 'ave'){
        classeAve()
    } 
    else if(valor === 'mamifero'){
        classeMamifero()
    }else if(valor === 'inseto'){
        classeInseto()
    }else if(valor === 'anelideo'){
        classeAnelideo()
    }
}


// ESCOLHA 3 DAS CLASSES DOS VERTEBRADOS
function classeAve(){

    let caixaVazia = document.createElement('option')
    caixaVazia.value = ''
    caixaVazia.textContent = 'SELECIONE'

    let carnivoro = document.createElement('option')
    carnivoro.value = 'carnivoro'
    carnivoro.textContent = 'CARNÍVORO'

    let onivoro = document.createElement('option')
    onivoro.value = 'onivoro'
    onivoro.textContent = 'ONÍVORO'

    select3.appendChild(caixaVazia)
    select3.appendChild(carnivoro)
    select3.appendChild(onivoro)

}


function classeMamifero(){

    let caixaVazia = document.createElement('option')
    caixaVazia.value = ''
    caixaVazia.textContent = 'SELECIONE'


    let herbivoro = document.createElement('option')
    herbivoro.value = 'herbivoro'
    herbivoro.textContent = 'HERBÍVORO'

    let onivoro = document.createElement('option')
    onivoro.value = 'onivoro'
    onivoro.textContent = 'ONÍVORO'

    select3.appendChild(caixaVazia)
    select3.appendChild(herbivoro)
    select3.appendChild(onivoro)
}

// ESCOLHA 3 DAS CLASSES DOS INVERTEBRADOS
function classeInseto(){
    let caixaVazia = document.createElement('option')
    caixaVazia.value = ''
    caixaVazia.textContent = 'SELECIONE'

    let herbivoro = document.createElement('option')
    herbivoro.value = 'herbivoro'
    herbivoro.textContent = 'HERBÍVORO'

    let hematofago = document.createElement('option')
    hematofago.value = 'hematofago'
    hematofago.textContent = 'HEMATOFAGO'

    select3.appendChild(caixaVazia)
    select3.appendChild(herbivoro)
    select3.appendChild(hematofago)

}

function classeAnelideo(){

    let caixaVazia = document.createElement('option')
    caixaVazia.value = ''
    caixaVazia.textContent = 'SELECIONE'

    let onivoro = document.createElement('option')
    onivoro.value = 'onivoro'
    onivoro.textContent = 'ONIVORO'

    let hematofago = document.createElement('option')
    hematofago.value = 'hematofago'
    hematofago.textContent = 'HEMATOFAGO'

    select3.appendChild(caixaVazia)
    select3.appendChild(onivoro)
    select3.appendChild(hematofago)
    
}

function escolha3Changed(){
    let classe = select2.value
    let grupo = select3.value
    removerResultado()

    if(classe === 'ave' && grupo === 'carnivoro'){
        resultado.textContent = 'AGUIA'
    }else if(classe === 'ave' && grupo === 'onivoro'){
       resultado.textContent = 'POMBA'
    }else if(classe === 'mamifero' && grupo === 'onivoro'){
        resultado.textContent = 'HOMEM'
    }else if(classe === 'mamifero' && grupo === 'herbivoro'){
        resultado.textContent = 'VACA'
    }else if(classe === 'inseto' && grupo === 'hematofago'){
        resultado.textContent = 'PULGA'
    }else if(classe === 'inseto' && grupo === 'herbivoro'){
        resultado.textContent = 'LAGARTA'
    }else if(classe === 'anelideo' && grupo === 'hematofago'){
        resultado.textContent = 'SANGUESSUGA'
    }else if(classe === 'anelideo' && grupo === 'onivoro'){
        resultado.textContent = 'MINHOCA'
    }
}

