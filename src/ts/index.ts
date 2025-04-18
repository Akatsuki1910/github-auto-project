// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    const toggleThemeButton = document.getElementById('toggle-theme');
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-scheme');
            document.body.classList.toggle('dark-scheme');
            // Change display text color based on theme
            display.style.color = document.body.classList.contains('dark-scheme') ? '#eee' : '#333';
        });
    }
    // ... (rest of the code)
});