// ... (Existing code)
const calculateModButton = document.getElementById('calculate-mod') as HTMLButtonElement;
calculateModButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue % 2).toString();
    }
});