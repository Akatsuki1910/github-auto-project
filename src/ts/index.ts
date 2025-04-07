// ... (Existing code)
const calculateAreaButton = document.getElementById('calculate-area') as HTMLButtonElement;
calculateAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const sideLength = parseFloat(display.value);
        display.value = (sideLength * sideLength).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)