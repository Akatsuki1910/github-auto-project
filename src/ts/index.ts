// ... (Existing code)
const log1pButton = document.getElementById('log1p') as HTMLButtonElement;
log1pButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = Number(display.value);
        const result = math.log1p(value);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)