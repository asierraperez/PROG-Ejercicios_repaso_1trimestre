function main() {
    var repetir = false
    while (!repetir) {
        var frase = entrada("una frase")
        var frase_reves = invertir_frase(frase)
        salida(frase, frase_reves)
        repetir = confirmar("repetir")
    }
}

main()