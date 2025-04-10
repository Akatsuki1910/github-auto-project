// ... (Existing code)
const calculateFloorButton = document.getElementById('calculate-floor') as HTMLButtonElement;
calculateFloorButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.floor(value).toString();
    }
});
// ... (Rest of the code)