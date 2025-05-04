// ... (Existing code)
const absoluteButton = document.getElementById('absolute') as HTMLButtonElement;
absoluteButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const num = parseFloat(display.value);
            const result = math.abs(num);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)