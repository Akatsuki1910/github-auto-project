// ... (Existing code)
const calculateSquareAreaButton = document.getElementById('calculate-square-area') as HTMLButtonElement;
calculateSquareAreaButton.addEventListener('click', () => {
    const side = parseFloat(prompt('Enter the side length of the square:') || '0');
    display.value = (side * side).toString();
});