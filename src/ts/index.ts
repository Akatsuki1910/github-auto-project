// ... (Existing code)
const calculateAreaOfSquareButton = document.getElementById('calculate-area-of-square') as HTMLButtonElement;
calculateAreaOfSquareButton.addEventListener('click', () => {
    const side = parseFloat(prompt('Enter side length:'));
    if (!isNaN(side)) {
        const area = side * side;
        display.value = area.toString();
    }
});
// ... (Rest of existing code)