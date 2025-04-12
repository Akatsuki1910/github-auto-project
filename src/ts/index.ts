// ... (Existing code)
const calculateTangentButton = document.getElementById('calculate-tangent') as HTMLButtonElement;
calculateTangentButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.tan(currentValue).toString();
});