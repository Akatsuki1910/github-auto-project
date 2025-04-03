// ... (Existing code)
const toggleFontSizeButton = document.getElementById('toggle-font-size') as HTMLButtonElement;
let fontSize = 16;
toggleFontSizeButton.addEventListener('click', () => {
    fontSize += 2;
    if (fontSize > 24) {
        fontSize = 16;
    }
    document.body.style.fontSize = fontSize + 'px';
});
// ... (Rest of the code)