// ... (Existing code)
const calculateInverseCosineButton = document.getElementById('calculate-inverse-cosine') as HTMLButtonElement;
calculateInverseCosineButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.acos(currentValue).toString();
});