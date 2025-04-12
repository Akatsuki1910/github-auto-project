// ... (Existing code)
const calculateKiteAreaButton = document.getElementById('calculate-kite-area') as HTMLButtonElement;
calculateKiteAreaButton.addEventListener('click', () => {
    const diagonal1 = parseFloat(prompt('Enter the length of the first diagonal:') || '0');
    const diagonal2 = parseFloat(prompt('Enter the length of the second diagonal:') || '0');
    display.value = (0.5 * diagonal1 * diagonal2).toString();
});