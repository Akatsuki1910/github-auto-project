// ... (Existing code)
const floorButton = document.getElementById('calculate-floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const floorValue = Math.floor(currentValue);
        display.value = floorValue.toString();
    }
});
//...(rest of the code)