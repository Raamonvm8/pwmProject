function logOut() {
    // Elimina los datos del usuario del almacenamiento local
    localStorage.removeItem('user_data');

    // Redirige al usuario a la página de inicio
    window.location.href = "homepage.html";
}