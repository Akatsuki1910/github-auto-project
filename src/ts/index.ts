// ... (Existing code)
const reciprocalButton = document.getElementById('reciprocal') as HTMLButtonElement;
reciprocalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const value = parseFloat(display.value);
        const result = 1 / value;
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)