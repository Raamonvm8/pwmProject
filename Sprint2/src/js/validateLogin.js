function loadHeader(user) {
    if (user.admin) {
        loadComponents("../html/components/headerAdminUser.html", "header");
    } else {
        loadComponents("../html/components/headerLoggedUser.html", "header");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    if (userData) {
        loadHeader(userData);
    } else {
        loadComponents("../html/components/header.html", "header");
    }
});

