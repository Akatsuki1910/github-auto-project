// ... (Existing code)
const calculateTripleButton = document.getElementById('calculate-triple') as HTMLButtonElement;
calculateTripleButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * 3).toString();
    }
});
// ... (Rest of the code)