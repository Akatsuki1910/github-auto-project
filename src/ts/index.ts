// ... (Existing code)
const calculateCubeSurfaceAreaButton = document.getElementById('calculate-cube-surface-area') as HTMLButtonElement;
calculateCubeSurfaceAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const side = parseFloat(prompt('Enter the side length:') || '0');
        display.value = (6 * Math.pow(side, 2)).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)