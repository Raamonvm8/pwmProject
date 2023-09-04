// Si el usuario no está logueado
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('user_data')) {
        window.location.href = 'error.html';
    }
});
