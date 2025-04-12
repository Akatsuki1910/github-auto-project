// ... (Existing code)
const calculateHalfButton = document.getElementById('calculate-half') as HTMLButtonElement;
calculateHalfButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter a value:') || '0');
    display.value = (value / 2).toString();
});