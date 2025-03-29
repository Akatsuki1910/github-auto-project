// ... (Existing code)
const roundNearestButton = document.getElementById('round-nearest') as HTMLButtonElement;
roundNearestButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const roundedValue = Math.round(currentValue);
        display.value = roundedValue.toString();
    }
});
//...(rest of the code)