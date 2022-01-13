/*Desenvolva uma função que recebe dois parâmetros, um é a 
quantidade de horas trabalhadas por um funcionário num mês, 
e o quanto ele recebe por hora. O retorno da função deve ser a 
string "Salário igual a R$ X", em que X é o quanto o funcionário 
ganhou no mês. Exemplos: */

function salario (horas, valorHora) {
    const salarioFinal = horas * valorHora
    return `Salário igual a R$ ${salarioFinal}`
}

console.log (salario(100, 37.4))