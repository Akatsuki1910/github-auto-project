// ... (Existing code)
const calculateCubeButton = document.getElementById('calculate-cube') as HTMLButtonElement;
calculateCubeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const num = parseFloat(display.value);
        display.value = Math.pow(num, 3).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)