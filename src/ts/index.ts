// ... (Existing code)
const calculateMemoryMinusButton = document.getElementById('calculate-memory-minus') as HTMLButtonElement;

calculateMemoryMinusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        if (memoryValue === null) {
            memoryValue = 0;
        }
        memoryValue -= currentValue;
    }
});
// ... (Rest of the code)