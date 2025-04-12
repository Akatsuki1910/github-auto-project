// ... (Existing code)
const calculateTripleButton = document.getElementById('calculate-triple') as HTMLButtonElement;
calculateTripleButton.addEventListener('click', () => {
    const value = parseFloat(prompt('Enter a value:') || '0');
    display.value = (value * 3).toString();
});