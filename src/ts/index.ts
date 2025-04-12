// ... (Existing code)
const calculateTriangleAreaButton = document.getElementById('calculate-triangle-area') as HTMLButtonElement;
calculateTriangleAreaButton.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter the base of the triangle:') || '0');
    const height = parseFloat(prompt('Enter the height of the triangle:') || '0');
    display.value = (0.5 * base * height).toString();
});