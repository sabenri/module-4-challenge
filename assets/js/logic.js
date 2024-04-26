let darkMode = false;
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
