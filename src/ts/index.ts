// ... (Existing code)
const toggleColorblindModeButton = document.getElementById('toggle-colorblind-mode') as HTMLButtonElement;
toggleColorblindModeButton.addEventListener('click', () => {
    document.body.classList.toggle('colorblind-mode');
});
// ... (Rest of the code)