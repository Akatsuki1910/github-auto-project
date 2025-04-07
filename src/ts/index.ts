// ... (Existing code)
const calculateCylinderSurfaceAreaButton = document.getElementById('calculate-cylinder-surface-area') as HTMLButtonElement;
calculateCylinderSurfaceAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    const height = parseFloat(prompt('Enter the height:') || '0');
    if (isNaN(radius) || isNaN(height)) {
        display.value = 'Error';
    }
    else {
        display.value = (2 * Math.PI * radius * height + 2 * Math.PI * radius * radius).toString();
    }
});
// ... (Rest of the code)