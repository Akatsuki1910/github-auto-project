// ... (Existing code)
const calculateAreaOfRectangleButton = document.getElementById('calculate-area-of-rectangle') as HTMLButtonElement;
calculateAreaOfRectangleButton.addEventListener('click', () => {
    const length = parseFloat(prompt('Enter length:'));
    const width = parseFloat(prompt('Enter width:'));
    if (!isNaN(length) && !isNaN(width)) {
        const area = length * width;
        display.value = area.toString();
    }
});
// ... (Rest of existing code)