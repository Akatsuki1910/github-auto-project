// ... (Existing code)
const calculateSquareAreaButton = document.getElementById('calculate-square-area') as HTMLButtonElement;
calculateSquareAreaButton.addEventListener('click', () => {
    const side = parseFloat(prompt('Enter the side length:') || '0');
    if (isNaN(side)) {
        display.value = 'Invalid input';
    }
    else {
        const area = side * side;
        display.value = area.toString();
    }
});