// ... (Existing code)
const absValueButton = document.getElementById('absValue') as HTMLButtonElement;

absValueButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const result = Math.abs(parseFloat(display.value));
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)