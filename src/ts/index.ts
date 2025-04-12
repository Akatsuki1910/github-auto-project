// ... (Existing code)
const calculateSquareButton = document.getElementById('calculate-square') as HTMLButtonElement;
calculateSquareButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter a value:') || '0');
    display.value = (value * value).toString();
});