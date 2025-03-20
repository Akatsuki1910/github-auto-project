// ... (Existing code)
const plusMinusButton = document.getElementById('plus-minus') as HTMLButtonElement;
plusMinusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});