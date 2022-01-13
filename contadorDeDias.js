//Função pra saber se o ano é bissexto
function anoBissexto (ano) {
    if (ano % 400 === 0) {
        return 366
    } else if (ano % 100 === 0){
        return 365
    } else if (ano % 4 === 0) {
        return 366
    }
    return 365 
}
//Array de dias do mês
const arrayMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//Função Contador de dias do ano inicial ou final
function contadorDeDiasAno (dia, mes, ano){
    let contador = 0

    for (let i = mes; i < 12; i ++) {
     contador += arrayMes[i]
    }
    contador += (arrayMes[mes-1] - dia)

    if ((anoBissexto(ano) == 366) && mes >=2 ) {
        contador++
    }

    return contador
}

teste = contadorDeDiasAno (12, 1)
console.log (teste)


//Função Contador de Dias totais

function contadorDeDias (anoDeNascimento, anoAtual, diaNascimento, mesNascimento, diaAtual, mesAtual) {
    let contador = 0
    for (let i = (anoDeNascimento + 1); i <= (anoAtual); i++) {
        contador += anoBissexto (i)
    }
    contador += contadorDeDiasAno (diaNascimento, mesNascimento)
    contador -= contadorDeDiasAno (diaAtual, mesAtual)
    return contador;
}

// Teste
const resultado = contadorDeDias(1994, 2020, 14, 02, 01, 06) 

console.log (resultado)

