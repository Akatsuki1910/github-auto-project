// ... (Existing code)
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
const memoryMinusButton = document.getElementById('memory-minus') as HTMLButtonElement;
let memoryValue = 0;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
memoryMinusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue -= currentValue;
    }
});