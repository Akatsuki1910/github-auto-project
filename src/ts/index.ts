// ... (Existing code)
const calculateDoubleButton = document.getElementById('calculate-double') as HTMLButtonElement;
calculateDoubleButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter a value:') || '0');
    display.value = (value * 2).toString();
});