// ... (Existing code)
const calculateRectangleAreaButton = document.getElementById('calculate-rectangle-area') as HTMLButtonElement;
calculateRectangleAreaButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const length = parseFloat(prompt('Enter the length:', '1'));
    const width = parseFloat(prompt('Enter the width:', '1'));
    if (isNaN(length) || isNaN(width)) {
        display.value = 'Error: Invalid input';
        return;
    }
    const area = length * width;
    display.value = area.toString();
});
// ... (Rest of the code)