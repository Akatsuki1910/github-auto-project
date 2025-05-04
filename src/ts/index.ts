// ... (Existing code)
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;

expm1Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        try {
            const x = parseFloat(display.value);
            const result = math.expm1(x);
            display.value = result.toString();
        } catch (error) {
            display.value = 'Error';
        }
    }
});
// ... (Rest of existing code)