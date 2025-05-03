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
const toggleColorSchemeButton = document.getElementById('toggle-color-scheme') as HTMLButtonElement;
const bodyElement = document.body;
toggleColorSchemeButton.addEventListener('click', () => {
    if (bodyElement.classList.contains('dark-scheme')) {
        bodyElement.classList.remove('dark-scheme');
        bodyElement.classList.add('light-scheme');
    } else {
        bodyElement.classList.remove('light-scheme');
        bodyElement.classList.add('dark-scheme');
    }
});
// ... (Rest of existing code)