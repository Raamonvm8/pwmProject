function lanza_modal2() {
    // Obtener el valor del campo de correo electrónico y contraseña
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Cargar el archivo JSON de usuarios
    fetch("../json/nombres.json")
        .then(response => response.json())
        .then(data => {
            // Verificar si el correo electrónico existe en el archivo JSON
            if (!data.includes(email)) {
                alert("Usuario no encontrado");
                // Redirigir a la siguiente página en caso de éxito
                
            } else if (!data.includes(password)){
                alert("Contraseña Incorrecta, pruebe de nuevo");
                
            }else{
                window.location.href = "initpage.html"; 
            }
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}


