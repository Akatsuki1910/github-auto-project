// ... (Existing code)
const toggleColorSchemeButton = document.getElementById('toggle-color-scheme') as HTMLButtonElement;
toggleColorSchemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});
// ... (Rest of the code)