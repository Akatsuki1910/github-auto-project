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

const currentDateButton = document.getElementById('current-date') as HTMLButtonElement;
currentDateButton.addEventListener('click', () => {
    const today = new Date();
    const dateString = today.toLocaleDateString();
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = dateString;
});
// ... (Rest of the code)