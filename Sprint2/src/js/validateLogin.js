function lanza_modal2() {
    // Obtener el valor del campo de correo electrónico y contraseña
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    

    // Cargar el archivo JSON de usuarios
    fetch("../assets/json/users.json")
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.email === email);
            // Verificar si el correo electrónico existe en el archivo JSON
            if (!user) {
                alert("Usuario no encontrado");                
            } else if (user.password != password){
                alert("Contraseña Incorrecta, pruebe de nuevo");
            }else{
                const userData = {
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    password: user.password,
                    photo: user.photo,
                    pets: user.pets,
                    reservations: user.reservations,
                    admin: user.admin,
                };
                localStorage.setItem('user_data', JSON.stringify(userData));
                loadHeader(user); // Cargar el header adecuado
                window.location.href = "initpage.html";
            }
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });


}

function loadHeader(user) {
    if (user.admin) {
        loadComponents("../html/components/headerAdminUser.html", "header");
    } else {
        loadComponents("../html/components/headerLoggedUser.html", "header");
    }
}



