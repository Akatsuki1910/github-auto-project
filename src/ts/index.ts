// ... (Existing code)
const calculateSphereSurfaceAreaButton = document.getElementById('calculate-sphere-surface-area') as HTMLButtonElement;
calculateSphereSurfaceAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const radius = parseFloat(prompt('Enter the radius:') || '0');
        display.value = (4 * Math.PI * Math.pow(radius, 2)).toString();
    } catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)