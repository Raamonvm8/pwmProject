document.addEventListener('DOMContentLoaded', formularioFunction);

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

function formularioFunction(event){
    fetch("../html/login.html").then(res => {
        
        return res.text()
    })
        .then(texto =>{ 
            
            document.getElementById("log").addEventListener("submit", function(event){
                event.preventDefault()
               
            });
         })

}

function enviarMensaje(e) {
    e.preventDefault();
    console.log("Hola, no me estoy recargando");
  
}

function lanza_modal() {
    console.log("holamundo");
    var email = document.getElementById("email").value;

    // Cambiar logica del validacion
    if (email.includes("@")) {
        var usuarioExiste = true;
        if(usuarioExiste){
            window.location.href = "initpage.html";
            //showMessage("Correo correcto", "success")

        }else{
            alert("Correo no existe. Introduce un correo válido.");
            
        }

    }
  
}


