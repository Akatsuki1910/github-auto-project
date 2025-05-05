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
// ... (Rest of existing code)