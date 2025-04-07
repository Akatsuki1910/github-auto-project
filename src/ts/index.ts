// ... (Existing code)
const doubleInverseButton = document.getElementById('double-inverse') as HTMLButtonElement;
doubleInverseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (1 / (2 * currentValue)).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)