// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const toggleThemeButton = document.getElementById('toggle-theme');
    const percentageButton = document.getElementById('percentage');

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-scheme');
            document.body.classList.toggle('light-scheme');
            localStorage.setItem('theme', document.body.classList.contains('dark-scheme') ? 'dark' : 'light');
            if (document.body.classList.contains('dark-scheme')) {
                display.style.color = '#eee';
            } else {
                display.style.color = '#333';
            }
            document.addEventListener('keydown', (event) => {
                if (event.key === 't' && event.ctrlKey) {
                    toggleThemeButton.click();
                }
            });
        });
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-scheme');
        document.body.classList.remove('light-scheme');
        display.style.color = '#eee';
    } else {
        document.body.classList.add('light-scheme');
        document.body.classList.remove('dark-scheme');
        display.style.color = '#333';
    }
    if (percentageButton) {
        percentageButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            if (!isNaN(currentValue)) {
                display.value = (currentValue / 100).toString();
            }
        });
    }
    // ... (rest of the code)
});