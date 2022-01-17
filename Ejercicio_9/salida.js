function salida(salida_materia) {
    if (salida_materia.nombre == "") {
        alert("ERROR\nNose ha encontrado ninguna materia,\nIntroduce una e intentalo de nuevo")
    } else {
        alert("Asignatura: " + salida_materia.nombre + "\n" +
            "Nota del trimestre 1 = " + salida_materia.nota1 + "\n" +
            "Nota del trimestre 2 = " + salida_materia.nota2 + "\n" +
            "Nota del trimestre 3 = " + salida_materia.nota3 + "\n" +
            "Nota Final = " + salida_materia.nota_final + "\n")
    }

}