function estaEntre (num, min, max, inclusivo = false) {
    if (inclusivo === true) {
        min -= 1
        max += 1

    }
    if ((num > min) && num < max ){
        return true
    } else {
        return false
    }
}

console.log (estaEntre (10, 1, 100))
console.log (estaEntre (10, 1, 10))
console.log (estaEntre (10, 1, 10, true))
console.log (estaEntre (1, 1, 10, true))
console.log (estaEntre (1, 1, 10))