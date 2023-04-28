let maiorValor = 10;
const menorValor = 1;
let numeroSecreto = parseInt(Math.random() * maiorValor + 1);

document.body.addEventListener('click', e => {
    if(e.target.id == 'btn-1'){
        maiorValor = 100;

        numeroSecreto= parseInt(Math.random() * maiorValor + 1);

        const elementoMenorValor = document.getElementById("menor_valor");
        elementoMenorValor.innerHTML = menorValor;

        const elementoMaiorValor = document.getElementById("maior_valor");
        elementoMaiorValor.innerHTML = maiorValor;

        console.log("Numero secreto: " + numeroSecreto);
    } else if (e.target.id == 'btn-2'){
        maiorValor = 1000;

        numeroSecreto= parseInt(Math.random() * maiorValor + 1);

        const elementoMenorValor = document.getElementById("menor_valor");
        elementoMenorValor.innerHTML = menorValor;

        const elementoMaiorValor = document.getElementById("maior_valor");
        elementoMaiorValor.innerHTML = maiorValor;

        console.log("Numero secreto: " + numeroSecreto);
    } else if(e.target.id == 'btn-0'){
        maiorValor = 10;
        numeroSecreto= parseInt(Math.random() * maiorValor + 1);
        
        const elementoMenorValor = document.getElementById("menor_valor");
        elementoMenorValor.innerHTML = menorValor;
        
        const elementoMaiorValor = document.getElementById("maior_valor");
        elementoMaiorValor.innerHTML = maiorValor;
        
        console.log("Numero secreto: " + numeroSecreto);
    }
})



