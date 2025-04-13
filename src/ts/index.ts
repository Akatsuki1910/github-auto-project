// ... (Existing code)
const calculateMemorySubtractButton = document.getElementById('calculate-memory-subtract') as HTMLButtonElement;
calculateMemorySubtractButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue -= currentValue;
    }
});