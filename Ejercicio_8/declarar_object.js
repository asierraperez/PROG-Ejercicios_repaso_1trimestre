function declarar_object() {
    var asignatura = function () {
        this.nombre = ""
        this.nota1 = 0
        this.nota2 = 0
        this.nota3 = 0
        this.nota_final = 0
        this.mediaTotal = function calcular_media() {
            this.nota_final = (this.nota1 + this.nota2 + this.nota3) / 3
            alert("Asignatura: " + this.nombre + "\n" +
                "Nota del trimestre 1 = " + this.nota1 + "\n" +
                "Nota del trimestre 2 = " + this.nota2 + "\n" +
                "Nota del trimestre 3 = " + this.nota3 + "\n" +
                "Nota Final = " + this.nota_final + "\n")
        }
    }
    return asignatura
}