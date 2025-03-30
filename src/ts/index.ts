// ... (Existing code)
const calculateCosecantButton = document.getElementById('calculate-cosecant') as HTMLButtonElement;
calculateCosecantButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = (1 / Math.sin(number)).toString();
});