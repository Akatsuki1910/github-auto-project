// ... (Existing code)
const toggleInvertedModeButton = document.getElementById('toggle-inverted-mode') as HTMLButtonElement;
toggleInvertedModeButton.addEventListener('click', () => {
    document.body.classList.toggle('inverted-mode');
});
// ... (Rest of the code)