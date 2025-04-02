// ... (Existing code)
const toggleItalicModeButton = document.getElementById('toggle-italic-mode') as HTMLButtonElement;
toggleItalicModeButton.addEventListener('click', () => {
    document.body.classList.toggle('italic-mode');
});
// ... (Rest of the code)