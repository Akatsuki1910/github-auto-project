// ... (Existing code)
const calculateRectanglePerimeterButton = document.getElementById('calculate-rectangle-perimeter') as HTMLButtonElement;
calculateRectanglePerimeterButton.addEventListener('click', () => {
    const length = parseFloat(prompt('Enter the length of the rectangle:') || '0');
    const width = parseFloat(prompt('Enter the width of the rectangle:') || '0');
    display.value = (2 * (length + width)).toString();
});