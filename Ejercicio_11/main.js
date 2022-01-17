function main() {
    var asignatura = declarar_object()
    var lista_materias = []
    var repetir = false
    while (!repetir) {
        var menu = prompt("Elige una operacion\n" +
            "1.-Introducir datos de la asignatura\n" +
            "2.-Mostrar datos\n" +
            "3.-Calcular media del curso\n" +
            "4.-Salir del programa")
        menu = parseInt(menu)
        switch (menu) {
            case 1:
                lista_materias = entrada_datos(asignatura, lista_materias)
                var Asignatura_declarada = true
                break;
            case 2:
                if (!Asignatura_declarada) {
                    alert("ERROR\nNose ha encontrado ninguna materia,\nIntroduce una e intentalo de nuevo")
                } else {
                    salida(lista_materias)
                }

                break;
            case 3:
                if (!Asignatura_declarada) {
                    alert("ERROR\nNose ha encontrado ninguna materia,\nIntroduce una e intentalo de nuevo")
                } else {
                    calculo_media(lista_materias)
                }
                break;
            case 4:
                repetir = confirmar("finalizar el programa")
                break;
            default:
                alert("ERROR\nDato introducido no reconocido, inténtelo de nuevo")
                break;
        }




    }

}
main()

