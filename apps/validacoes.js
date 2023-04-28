function verificaChuteValido(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        //console.log("Valor inválido")
        elementoChute.innerHTML += `
            <div>Valor inválido</div>
        `
        return
    }

    if(chuteMaiorMenorValorPermitido(numero)){
        //console.log(`Número inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
        elementoChute.innerHTML += `
            <div>Número inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(chuteCorreto(numero)){
        document.body.innerHTML = `
            <h1>Parabéns, você acertou!!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar"> Jogar novamente </button>
        `
    } else if( numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>Dica: o número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>Dica: o número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteMaiorMenorValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

function chuteCorreto(numero){
    return numero == numeroSecreto
}

document.body.addEventListener('click', e => {
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})