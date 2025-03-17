// ... (Existing code)
const calculateTriangleAreaButton = document.getElementById('calculate-triangle-area') as HTMLButtonElement;
calculateTriangleAreaButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter the base:') || '0');
    const height = parseFloat(prompt('Enter the height:') || '0');
    if (isNaN(base) || isNaN(height)) {
        display.value = 'Invalid input';
    }
    else {
        const area = 0.5 * base * height;
        display.value = area.toString();
    }
});