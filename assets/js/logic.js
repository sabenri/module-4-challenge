let darkMode = 'true';
const TogglButton = document.getElementById('Toggl');
const body = document.body;

TogglButton.addEventListener('click', function() {
    if (darkMode) {
        body.classList.remove('dark-mode');
        darkMode = false;
    } else {
        body.classList.add('dark-mode');
        darkMode = true;

    }
});
backButton.addEventListener('click', function() {
    window.location.href = 'sabelyblog.html';
});