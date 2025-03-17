// ... (Existing code)
const calculateCubeSurfaceAreaButton = document.getElementById('calculate-cube-surface-area') as HTMLButtonElement;
calculateCubeSurfaceAreaButton.addEventListener('click', () => {
    const side = parseFloat(prompt('Enter the side length:') || '0');
    if (isNaN(side)) {
        display.value = 'Invalid input';
    }
    else {
        const area = 6 * side * side;
        display.value = area.toString();
    }
});