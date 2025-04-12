// ... (Existing code)
const calculateRectangleAreaButton = document.getElementById('calculate-rectangle-area') as HTMLButtonElement;
calculateRectangleAreaButton.addEventListener('click', () => {
    const length = parseFloat(prompt('Enter the length of the rectangle:') || '0');
    const width = parseFloat(prompt('Enter the width of the rectangle:') || '0');
    display.value = (length * width).toString();
});