// ... (Existing code)
const floorButton = document.getElementById('floor') as HTMLButtonElement;
floorButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.floor(currentValue).toString();
    }
});
// ... (Rest of the code)