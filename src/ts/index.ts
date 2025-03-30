// ... (Existing code)
const minArrayButton = document.getElementById('min-array') as HTMLButtonElement;
minArrayButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for min-array";
        return;
    }
    display.value = Math.min(...numbers).toString();
});