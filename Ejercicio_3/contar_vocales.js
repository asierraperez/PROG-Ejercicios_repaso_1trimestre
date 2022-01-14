function contar_vocales(contar_frase) {
    var aux_frase = ""
    //contar(total,a,e,i,o,u)
    var contar = [0, 0, 0, 0, 0, 0]
    var letra = ""
    aux_frase = contar_frase.toLowerCase()
    for (let i = 0; i < aux_frase.length; i++) {
        letra = aux_frase.charAt(i)
        if (letra == "a" | letra == "e" | letra == "i" | letra == "o" | letra == "u") {
            contar[0]++

            switch (letra) {
                case "a":
                    contar[1]++
                    break;
                case "e":
                    contar[2]++
                    break;
                case "i":
                    contar[3]++
                    break;
                case "o":
                    contar[4]++
                    break;
                case "u":
                    contar[5]++
                    break;


            }
        }
    }
    return contar



}