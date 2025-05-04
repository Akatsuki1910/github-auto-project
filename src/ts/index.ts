// ... (Existing code)
const log2Button = document.getElementById('log2') as HTMLButtonElement;

log2Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const result = math.log2(parseFloat(display.value));
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)