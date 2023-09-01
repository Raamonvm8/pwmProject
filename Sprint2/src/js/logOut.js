function logOut() {
    localStorage.removeItem('user_data');
    window.location.href = "homepage.html";
}