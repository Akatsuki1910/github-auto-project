// ... (Existing code)
const toggleColorSchemeButton = document.getElementById('toggle-color-scheme') as HTMLButtonElement;
toggleColorSchemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
    localStorage.setItem('color-scheme', document.body.classList.contains('dark-scheme') ? 'dark' : 'light');
});
window.addEventListener('load', () => {
    const savedScheme = localStorage.getItem('color-scheme');
    if (savedScheme === 'dark') {
        document.body.classList.add('dark-scheme');
        document.body.classList.remove('light-scheme');
    } else {
        document.body.classList.add('light-scheme');
        document.body.classList.remove('dark-scheme');
    }
});
// ... (Rest of the code)