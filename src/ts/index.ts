// ... (Existing code)
const calculateCosecantButton = document.getElementById('calculate-cosecant') as HTMLButtonElement;
calculateCosecantButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (1 / Math.sin(currentValue)).toString();
});