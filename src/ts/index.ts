// ... (Existing code)
const calculateAbsButton = document.getElementById('calculate-abs') as HTMLButtonElement;
calculateAbsButton.addEventListener('click', () => {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
    }
    else {
        display.value = math.abs(value).toString();
    }
});
// ... (Rest of the code)