// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const toggleThemeButton = document.getElementById('toggle-theme');

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-scheme');
            document.body.classList.toggle('light-scheme');
            // Save theme preference to localStorage
            localStorage.setItem('theme', document.body.classList.contains('dark-scheme') ? 'dark' : 'light');
            // Added feature: Change display text color based on theme
            if (document.body.classList.contains('dark-scheme')) {
                display.style.color = '#eee';
            } else {
                display.style.color = '#333';
            }
//Added keyboard shortcut
            document.addEventListener('keydown', (event) => {
                if (event.key === 't' && event.ctrlKey) {
                    toggleThemeButton.click();
                }
            });
        });
    }

    // Load theme preference from localStorage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-scheme');
        document.body.classList.remove('light-scheme');
        display.style.color = '#eee'; // Set display text color on theme load
    } else {
        document.body.classList.add('light-scheme');
        document.body.classList.remove('dark-scheme');
        display.style.color = '#333'; // Set display text color on theme load
    }
    // ... (rest of the code)
});