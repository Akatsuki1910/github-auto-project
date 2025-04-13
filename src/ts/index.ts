// ... (Existing code)
const calculateFloorButton = document.getElementById('calculate-floor') as HTMLButtonElement;
calculateFloorButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        alert('Invalid input for floor.');
        return;
    }
    display.value = Math.floor(value).toString();
});