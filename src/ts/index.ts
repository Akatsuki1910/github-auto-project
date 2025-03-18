// ... (Existing code)
const calculateCylinderSurfaceAreaButton = document.getElementById('calculate-cylinder-surface-area') as HTMLButtonElement;
calculateCylinderSurfaceAreaButton.addEventListener('click', () => {
    const radius = parseFloat(prompt('Enter the radius:') || '0');
    const height = parseFloat(prompt('Enter the height:') || '0');
    if (isNaN(radius) || isNaN(height)) {
        display.value = 'Invalid input';
    }
    else {
        const area = 2 * Math.PI * radius * (radius + height);
        display.value = area.toString();
    }
});