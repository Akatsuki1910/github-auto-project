// ... (Existing code)
const log1pButton = document.getElementById('log1p') as HTMLButtonElement;

log1pButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const x = parseFloat(display.value);
            const result = math.log1p(x);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)