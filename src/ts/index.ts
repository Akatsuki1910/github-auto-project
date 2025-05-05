// ... (Existing code)
const randButton = document.getElementById('rand') as HTMLButtonElement;
randButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = Math.random().toString();
});

const roundToDecimalButton = document.getElementById('round-to-decimal') as HTMLButtonElement;
roundToDecimalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value.toFixed(2);
    }
});
const deleteLastDigitButton = document.getElementById('delete-last-digit') as HTMLButtonElement;
deleteLastDigitButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value.slice(0, -1);
});
const reciprocalButton = document.getElementById('reciprocal') as HTMLButtonElement;
reciprocalButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const value = parseFloat(display.value);
    if (!isNaN(value) && value !== 0) {
        display.value = (1 / value).toString();
    } else if (value === 0) {
        display.value = "Cannot divide by zero";
    }
});
// ... (Rest of existing code)