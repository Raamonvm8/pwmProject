document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const lastNameInput = document.getElementById('last-name-input');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    const pets = document.getElementById('pets');
    const reservations = document.getElementById('reservations');
    const profilePhoto = document.getElementById('foto-perfil-profile');

    // Obtener los datos del usuario del almacenamiento local
    const userData = JSON.parse(localStorage.getItem('user_data'));

    if (userData) {
        // Campos perfil
        nameInput.value = userData.name;
        lastNameInput.value = userData.surname;
        emailInput.value = userData.email;
        passwordInput.value = "********"; 

        // Campos izquierda
        pets.textContent = userData.pets;
        reservations.textContent = userData.reservations;

        if (userData.photo) {
            profilePhoto.src = userData.photo;
        }
    }
});
