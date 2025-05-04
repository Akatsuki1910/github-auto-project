// ... (Existing code)
const inverseCosineButton = document.getElementById('inverse-cosine') as HTMLButtonElement;
inverseCosineButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const num = parseFloat(display.value);
            const result = math.acos(num);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)