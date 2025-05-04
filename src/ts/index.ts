// ... (Existing code)
const memoryMinusButton = document.getElementById('memory-minus') as HTMLButtonElement;

memoryMinusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display.value) {
        const currentValue = parseFloat(display.value);
        if (memoryValue !== null) {
            memoryValue -= currentValue;
        } else {
            memoryValue = -currentValue;
        }
    }
});
// ... (Rest of existing code)