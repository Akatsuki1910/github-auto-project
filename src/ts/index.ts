// ... (Existing code)
const calculateSecantButton = document.getElementById('calculate-secant') as HTMLButtonElement;
calculateSecantButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (1 / Math.cos(currentValue)).toString();
});