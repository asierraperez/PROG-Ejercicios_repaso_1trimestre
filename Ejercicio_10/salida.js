function salida(salida_lista) {
    var repetir_salida = true
    while (repetir_salida) {
        var menu_salida = prompt("Elige una operacion\n" +
            "1.- Buscar por nombre\n" +
            "2.- Visualizar todo\n")
        menu_salida = parseInt(menu_salida)
        switch (menu_salida) {
            case 1:
                var nombre = entrada("nombre de la asignatura")
                var encontro = false
                for (let i = 0; i < salida_lista.length; i++) {
                    if (salida_lista[i].nombre == nombre) {
                        encontro = true
                        alert("Asignatura: " + salida_lista[i].nombre + "\n" +
                            "Nota del trimestre 1 = " + salida_lista[i].nota1 + "\n" +
                            "Nota del trimestre 2 = " + salida_lista[i].nota2 + "\n" +
                            "Nota del trimestre 3 = " + salida_lista[i].nota3 + "\n" +
                            "Nota Final = " + salida_lista[i].nota_final + "\n")
                    }
                }
                if (!encontro) {
                    alert("ERROR,\nNo se encontro la asignatura a buscar")
                }
                repetir_salida = confirmar("ver otra asignatura")
                break;
            case 2:
                for (let i = 0; i < salida_lista.length; i++) {
                    alert("Asignatura " + (i + 1) + " de " + salida_lista.length + "\n" +
                        "Asignatura: " + salida_lista[i].nombre + "\n" +
                        "Nota del trimestre 1 = " + salida_lista[i].nota1 + "\n" +
                        "Nota del trimestre 2 = " + salida_lista[i].nota2 + "\n" +
                        "Nota del trimestre 3 = " + salida_lista[i].nota3 + "\n" +
                        "Nota Final = " + salida_lista[i].nota_final + "\n")
                }
                repetir_salida = confirmar("ver otra asignatura")
                break;
            default:
                alert("ERROR\nDato introducido no reconocido, inténtelo de nuevo")
                break;
        }
    }


}