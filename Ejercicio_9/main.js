function main() {
    var asignatura = declarar_object()
    var materia = new asignatura()
    var repetir = false
    while (!repetir) {
        var menu = prompt("Elige una operacion\n" +
            "1.-Introducir datos de la asignatura\n" +
            "2.-Mostrar datos\n" +
            "3.-Salir del programa")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                materia = entrada_datos(materia)
                break;
            case 2:
                salida(materia)
                break;
            case 3:
                repetir = confirmar("finalizar el programa")
                break;
            default:
                alert("ERROR\nDato introducido no reconocido, inténtelo de nuevo")
                break;
        }




    }

}
main()

