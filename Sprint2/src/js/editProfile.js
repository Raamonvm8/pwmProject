document.addEventListener('DOMContentLoaded', function() {
    // Verify if user is admin load user selected and is not admin load the info user
    try {
        const userDataJSON = localStorage.getItem('user_data');
        const isAdmin = userDataJSON ? JSON.parse(userDataJSON).admin : false;

        if (isAdmin) {
            const selectedUserJSON = localStorage.getItem('user_selected_by_admin');
            if (selectedUserJSON) {
                const selectedUser = JSON.parse(selectedUserJSON);

                const nameInput = document.getElementById('lname');
                const lastNameInput = document.getElementById('lapellido');
                const emailInput = document.getElementById('lcorreo');
                const passwordInput = document.getElementById('llpass');
                
                nameInput.value = selectedUser.name || '';
                lastNameInput.value = selectedUser.surname || '';
                emailInput.value = selectedUser.email || '';
                passwordInput.value = "********"; 
            } else {
                throw new Error("Selected user data not found");
            }
        } else {
            if (userDataJSON) {
                const userData = JSON.parse(userDataJSON);

                const nameInput = document.getElementById('lname');
                const lastNameInput = document.getElementById('lapellido');
                const emailInput = document.getElementById('lcorreo');
                const passwordInput = document.getElementById('llpass');
                
                nameInput.value = userData.name || '';
                lastNameInput.value = userData.surname || '';
                emailInput.value = userData.email || '';
                passwordInput.value = "********"; 
            } else {
                throw new Error("User data not found");
            }
        }
    } catch (error) {
        console.error('Error:', error);
        window.location.href = '../html/error.html';
    }
});
