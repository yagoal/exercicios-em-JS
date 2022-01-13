/*Escreva uma função que receba um valor booleano ou numérico. Se o 
parâmetro fornecido for booleano, o retorno da função deverá ser o
inverso. Por exemplo, se a entrada for false, retornará true. Se o 
parâmetro fornumérico, o retorno será o número inverso. Por exemplo,
e for fornecido 1, o retorno será 1. Se o parâmetro de entrada não 
for de nenhum dos tipo acima, retorne "booleano ou número esperados,
o parâmetro é do tipo ...". Exemplos: */





function inverso (valor) {
    if ((typeof valor) === "boolean") {
        return !valor
    } else if ((typeof valor) === "number"){
        return valor * -1
    }
    return "Só é esperado valor numérico ou booleano"
}

console.log (inverso(1))
console.log (inverso(true))
console.log (inverso(" - "))