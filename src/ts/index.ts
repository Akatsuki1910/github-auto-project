// ... (Existing code)
const calculateInverseTangentButton = document.getElementById('calculate-inverse-tangent') as HTMLButtonElement;
calculateInverseTangentButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.atan(currentValue).toString();
});