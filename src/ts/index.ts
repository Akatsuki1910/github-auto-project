// ... (Existing code)
const calculateRectangleAreaButton = document.getElementById('calculate-rectangle-area') as HTMLButtonElement;
calculateRectangleAreaButton.addEventListener('click', () => {
    const length = parseFloat(prompt('Enter the length:') || '0');
    const width = parseFloat(prompt('Enter the width:') || '0');
    if (isNaN(length) || isNaN(width)) {
        display.value = 'Invalid input';
    }
    else {
        const area = length * width;
        display.value = area.toString();
    }
});