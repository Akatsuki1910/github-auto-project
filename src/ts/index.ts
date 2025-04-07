// ... (Existing code)
const calculateSquareButton = document.getElementById('calculate-square') as HTMLButtonElement;
calculateSquareButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const num = parseFloat(display.value);
        display.value = Math.pow(num, 2).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)