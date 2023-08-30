document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('boton-hamburguesa-header');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuState = document.getElementById('mobileMenuState');

    mobileMenuButton.addEventListener('click', function () {
        if (mobileMenuState.value === 'closed') {
            mobileMenuState.value = 'open';
            mobileMenu.classList.add('open');
        } else {
            mobileMenuState.value = 'closed';
            mobileMenu.classList.remove('open');
        }
    });

    // Cuando cambias de página, asegúrate de que el menú esté cerrado
    window.addEventListener('unload', function () {
        mobileMenuState.value = 'closed';
    });
});






