// ... (Existing code)
const calculateSphereSurfaceAreaButton = document.getElementById('calculate-sphere-surface-area') as HTMLButtonElement;
calculateSphereSurfaceAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:', '1'));
    if (isNaN(radius)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const surfaceArea = 4 * Math.PI * radius * radius;
    display.value = surfaceArea.toString();
});
// ... (Rest of the code)