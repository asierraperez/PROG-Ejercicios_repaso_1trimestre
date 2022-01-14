function entrada() {
    var valores = [0, 0, 0]
    for (let i = 0; i < valores.length; i++) {
        valores[i] = prompt("Introduce el valor " + (i + 1))
    }
    return valores
}