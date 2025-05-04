// ... (Existing code)
const inverseSineButton = document.getElementById('inverse-sine') as HTMLButtonElement;
inverseSineButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const num = parseFloat(display.value);
            const result = math.asin(num);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)