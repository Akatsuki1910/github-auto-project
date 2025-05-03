// ... (Existing code)
const toggleFontSizeButton = document.getElementById('toggle-fontSize') as HTMLButtonElement;
const displayElement = document.getElementById('display') as HTMLInputElement;
toggleFontSizeButton.addEventListener('click', () => {
    if (displayElement.classList.contains('large-font')) {
        displayElement.classList.remove('large-font');
    } else {
        displayElement.classList.add('large-font');
    }
});
// ... (Rest of existing code)