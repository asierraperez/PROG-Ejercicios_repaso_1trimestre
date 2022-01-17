function comprobar(user, pass, user2, pass2) {
    if (user == user2) {
        if (pass == pass2) {
            alert("Datos correctos\nUsuario: " + user + "\nClave: " + pass)
            return true
        } else {
            alert("ERROR,\nEl usuario y la contraseña tienen que ser iguales")
            return false
        }
    } else {
        alert("ERROR,\nEl usuario y la contraseña tienen que ser iguales")
        return false

    }

}