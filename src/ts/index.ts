// ... (Existing code)
const calculateHalfButton = document.getElementById('calculate-half') as HTMLButtonElement;
calculateHalfButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 2).toString();
    }
});
// ... (Rest of the code)