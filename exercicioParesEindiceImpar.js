/*Elabore uma função que receba um array de números e retorne um 
array que tenha todos os números que são pares e que também tenham
índices pares.*/


const arrayExemplo = [2, 5, 6, 9, 28, 30, 29, 58, 22, 33]


function paresComIndPar (numeros) {
    let resultado = []

    for (let i =0; i<numeros.length; i+=2){
        if (numeros[i] % 2 === 0) {
            resultado.push(numeros[i])
        }
    }
    return resultado
}

const resultado = paresComIndPar (arrayExemplo)

console.log (resultado)