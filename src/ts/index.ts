// ... (Existing code)
const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});