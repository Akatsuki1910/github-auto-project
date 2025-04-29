// ... (Existing code)
const log10Button = document.getElementById('log10') as HTMLButtonElement;
log10Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const result = math.log10(parseFloat(display.value));
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)