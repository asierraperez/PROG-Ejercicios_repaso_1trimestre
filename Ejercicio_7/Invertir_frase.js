function invertir_frase(frase) {
    var aux_frase = ""
    aux_frase = frase
    var frase_reves = ""
    for (let i = (aux_frase.length - 1); i >= 0; i--) {
        frase_reves = frase_reves + aux_frase.charAt(i)
    }
    return frase_reves

}