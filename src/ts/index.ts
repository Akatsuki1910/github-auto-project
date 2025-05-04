// ... (Existing code)
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;

cbrtButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const result = math.cbrt(parseFloat(display.value));
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)