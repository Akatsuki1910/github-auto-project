// ... (Existing code)
const toggleColorSchemeButton = document.getElementById('toggle-color-scheme') as HTMLButtonElement;
toggleColorSchemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
    localStorage.setItem('color-scheme', document.body.classList.contains('dark-scheme') ? 'dark' : 'light');
    // Added feature: Update button text based on the selected theme
    toggleColorSchemeButton.textContent = document.body.classList.contains('dark-scheme') ? 'Light Mode' : 'Dark Mode';
    //Added feature: Applying color scheme to the calculator display
    const display = document.getElementById('display') as HTMLInputElement;
    display.style.backgroundColor = document.body.classList.contains('dark-scheme') ? '#555' : '#fff';
    display.style.color = document.body.classList.contains('dark-scheme') ? '#eee' : '#333';
});
window.addEventListener('load', () => {
    const savedScheme = localStorage.getItem('color-scheme');
    if (savedScheme === 'dark') {
        document.body.classList.add('dark-scheme');
        document.body.classList.remove('light-scheme');
        toggleColorSchemeButton.textContent = 'Light Mode';
    } else {
        document.body.classList.add('light-scheme');
        document.body.classList.remove('dark-scheme');
        toggleColorSchemeButton.textContent = 'Dark Mode';
    }
    // Apply saved color scheme to the calculator display on load
    const display = document.getElementById('display') as HTMLInputElement;
    display.style.backgroundColor = document.body.classList.contains('dark-scheme') ? '#555' : '#fff';
    display.style.color = document.body.classList.contains('dark-scheme') ? '#eee' : '#333';
});
// ... (Rest of the code)