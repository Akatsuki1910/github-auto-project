// ... (Existing code)
const calculateTangentButton = document.getElementById('calculate-tangent') as HTMLButtonElement;
calculateTangentButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (isNaN(number)) {
        display.value = "Invalid input";
        return;
    }
    display.value = Math.tan(number).toString();
});