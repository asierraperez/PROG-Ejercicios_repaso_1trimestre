function main() {
    var coinciden = false
    while (!coinciden) {
        var usuario = entrada("Introduce nombre de usuario")
        var clave = entrada("Introduce clave")
        var comprueba_usuario = entrada("Repite nombre de usuario")
        var comprueba_clave = entrada("Repite clave")
        var coinciden = comprobar(usuario, clave, comprueba_usuario, comprueba_clave)
    }


}
main()