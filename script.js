// ETAPA 1 - DEFININDO AS VARIÁVEIS
const btnIncrementar = document.getElementById('incrementar')
const btnDecrementar = document.getElementById('decrementar')
const btnZerar = document.getElementById('zerar')
const pNumero = document.getElementById('contador')

let contador = 0
pNumero.innerHTML = contador

// CONDIÇÃO PARA DEFINIR A COR DO VALOR INICIAL
if(contador == 0) {
    pNumero.style.color = '#0000ff'
} else if(contador % 2 == 0) {
    pNumero.style.color = '#008000'
} else if(contador % 2 !== 0) {
    pNumero.style.color = '#ff0000'
}



//ETAPA 2 = FUNÇÕES DOS BOTÕES
btnIncrementar.addEventListener('click', function() {
    if(contador >= 100) {
        alert('Este contador só exibe números de 0 a 100')
    } else {
        contador++
        if(contador % 2 == 0) {
            pNumero.style.color = '#008000'
        } else if(contador % 2 !== 0) {
            pNumero.style.color = '#ff0000'
        }
        pNumero.innerHTML = contador
        btnZerar.style.display = 'inline'
    }
})

btnDecrementar.addEventListener('click', function() {
    if(contador <= 0) {
        alert('Este contador só exibe números de 0 a 100')
    } else {
        contador--
        if(contador == 0) {
            btnZerar.style.display = 'none'
            pNumero.style.color = '#0000ff'
        } else if(contador % 2 == 0) {
            pNumero.style.color = '#008000'
        } else if(contador % 2 !== 0) {
            pNumero.style.color = '#ff0000'
        }
        pNumero.innerHTML = contador
    }
})

btnZerar.addEventListener('click', function() {
    contador = 0
    if(contador == 0) {
        pNumero.style.color = '#0000ff'
    } else if(contador % 2 == 0) {
        pNumero.style.color = '#008000'
    } else if(contador % 2 !== 0) {
        pNumero.style.color = '#ff0000'
    }
    pNumero.innerHTML = contador
    btnZerar.style.display = 'none'
})
