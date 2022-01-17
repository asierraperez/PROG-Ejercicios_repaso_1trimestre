function entrada_datos(asignatura, lista_materias) {
    var aux_lista_materias = lista_materias
    var continuar = true
    while (continuar) {
        var aux_materia = new asignatura()
        aux_materia.nombre = entrada("nombre de la asignatura")
        aux_materia.nota1 = entrada("nota primer trimestre")
        aux_materia.nota1 = parseInt(aux_materia.nota1)
        aux_materia.nota2 = entrada("nota segundo trimestre")
        aux_materia.nota2 = parseInt(aux_materia.nota2)
        aux_materia.nota3 = entrada("nota tercer trimestre")
        aux_materia.nota3 = parseInt(aux_materia.nota3)
        aux_materia.mediaTotal()
        aux_lista_materias.push(aux_materia)
        continuar = confirmar("crear otra asignatura")
    }

    return aux_lista_materias
}