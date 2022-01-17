function entrada_datos(materia) {
    var aux_materia = materia
    aux_materia.nombre = entrada("nombre de la asignatura")
    aux_materia.nota1 = entrada("nota primer trimestre")
    aux_materia.nota1 = parseInt(aux_materia.nota1)
    aux_materia.nota2 = entrada("nota segundo trimestre")
    aux_materia.nota2 = parseInt(aux_materia.nota2)
    aux_materia.nota3 = entrada("nota tercer trimestre")
    aux_materia.nota3 = parseInt(aux_materia.nota3)
    aux_materia.mediaTotal()
    return aux_materia
}