function loginUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Loading JSON user data
    fetch("../assets/json/users.json")
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.email === email);
            // Verify if user exist
            if (!user) {
                alert("Usuario no encontrado");                
            } else if (user.password != password){
                alert("Contraseña Incorrecta, pruebe de nuevo");
            }else{
                const userData = {
                    id: user.id,
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
                loadHeader(user);
                window.location.href = "initpage.html";
            }
        })
        .catch(error => {
            console.error("Error in loading JSON:", error);
        });
}
