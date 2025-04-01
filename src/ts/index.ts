// ... (Existing code)
const calculateTriangleAreaButton = document.getElementById('calculate-triangle-area') as HTMLButtonElement;
calculateTriangleAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const base = parseFloat(prompt('Enter the base:', '1'));
    const height = parseFloat(prompt('Enter the height:', '1'));
    if (isNaN(base) || isNaN(height)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const area = 0.5 * base * height;
    display.value = area.toString();
});
// ... (Rest of the code)