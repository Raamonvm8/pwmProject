document.addEventListener('DOMContentLoaded', function() {
    const userDataJSON = localStorage.getItem('user_data');
    
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        
        const nameInput = document.getElementById('lname');
        const lastNametInput = document.getElementById('lapellido');
        const emailInput = document.getElementById('lcorreo');
        const passwordInput = document.getElementById('llpass');
        
        nameInput.value = userData.name || '';
        lastNametInput.value = userData.surname || '';
        emailInput.value = userData.email || '';
        passwordInput.value = "********"; // Puedes ajustar este valor si es necesario
    } else {
        console.log('User data not found');
    }
});
