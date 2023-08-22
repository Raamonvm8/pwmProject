function validateEmail() {
    // Obtiene el valor del campo de email
    var email = document.getElementsById("email").value;

    // Valida el formato del correo
    if (email.includes("@")) {
        // Si el correo es válido, realiza la redirección
        window.location.href = "initpage.html";
    } else {
        // Si el correo no es válido, muestra un mensaje de error
        alert("Correo inválido. Introduce un correo válido.");
    }

    return false;
}


