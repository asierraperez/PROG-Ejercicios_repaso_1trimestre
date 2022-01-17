function declarar_object() {
    var asignatura = function () {
        this.nombre = ""
        this.nota1 = 0
        this.nota2 = 0
        this.nota3 = 0
        this.nota_final = 0
        this.mediaTotal = function calcular_media() {
            this.nota_final = (this.nota1 + this.nota2 + this.nota3) / 3
        }
    }
    return asignatura
}