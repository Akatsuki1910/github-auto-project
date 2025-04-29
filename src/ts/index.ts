// ... (Existing code)
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = Number(display.value);
        const result = math.expm1(value);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the existing code)