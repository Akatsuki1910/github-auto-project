// ... (Existing code)
const maxArrayButton = document.getElementById('max-array') as HTMLButtonElement;
maxArrayButton.addEventListener('click', () => {
    const currentValue = display.value;
    const numbers = currentValue.split(',').map(Number);
    if (numbers.some(isNaN)) {
        display.value = "Invalid input for max-array";
        return;
    }
    display.value = Math.max(...numbers).toString();
});