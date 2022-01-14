function contar_numeros(dato) {
    var aux_numero = dato
    var tabla = ""
    for (let i = 0; i < aux_numero; i++) {
        var resto = i % 2
        if (resto == 1) {
            if (i == 1) {
                tabla = i + tabla
                console.log(9)
            } else {
                tabla = i + ", " + tabla
            }

        }

    }
    return tabla

}