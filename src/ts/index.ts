// ... (Existing code)
const calculateSquarePerimeterButton = document.getElementById('calculate-square-perimeter') as HTMLButtonElement;
calculateSquarePerimeterButton.addEventListener('click', () => {
    const side = parseFloat(prompt('Enter the side length of the square:') || '0');
    display.value = (4 * side).toString();
});