// ... (Existing code)
const calculateCuboidSurfaceAreaButton = document.getElementById('calculate-cuboid-surface-area') as HTMLButtonElement;
calculateCuboidSurfaceAreaButton.addEventListener('click', () => {
    const length = parseFloat(prompt('Enter the length:') || '0');
    const width = parseFloat(prompt('Enter the width:') || '0');
    const height = parseFloat(prompt('Enter the height:') || '0');
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        display.value = 'Invalid input';
    }
    else {
        const area = 2 * (length * width + width * height + height * length);
        display.value = area.toString();
    }
});