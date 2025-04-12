// ... (Existing code)
const calculateRhombusAreaButton = document.getElementById('calculate-rhombus-area') as HTMLButtonElement;
calculateRhombusAreaButton.addEventListener('click', () => {
    const diagonal1 = parseFloat(prompt('Enter the length of the first diagonal:') || '0');
    const diagonal2 = parseFloat(prompt('Enter the length of the second diagonal:') || '0');
    display.value = (0.5 * diagonal1 * diagonal2).toString();
});