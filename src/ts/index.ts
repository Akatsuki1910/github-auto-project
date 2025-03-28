// ... (Existing code)
const floorButton = document.getElementById('floor');
floorButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid input';
        return;
    }
    const floorValue = Math.floor(currentValue);
    display.value = floorValue.toString();
});
//...(rest of the code)