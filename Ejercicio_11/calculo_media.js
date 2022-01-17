function calculo_media(calculo_lista) {
    var suma_notas = 0
    var tabla = ""
    for (let i = 0; i < calculo_lista.length; i++) {
        suma_notas = calculo_lista[i].nota_final + suma_notas
        tabla = tabla + (i + 1) + ".- " + calculo_lista[i].nombre + ", Nota final= " + calculo_lista[i].nota_final + "\n"
    }
    var media_curso = suma_notas / calculo_lista.length
    tabla = tabla + "Media del curso = " + media_curso
    alert(tabla)


}