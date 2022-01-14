function operaciones(op_valores) {
    var resultado = []
    var raiz = Math.pow(op_valores[1], 2) - (4 * op_valores[0] * op_valores[2])
    var dividendo = 2 * op_valores[0]
    resultado[0] = (-op_valores[1] + Math.sqrt(raiz)) / dividendo
    resultado[1] = (-op_valores[1] - Math.sqrt(raiz)) / dividendo
    return resultado

}