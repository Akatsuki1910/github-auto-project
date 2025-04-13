// ... (Existing code)
const calculateMemoryMultiplyButton = document.getElementById('calculate-memory-multiply') as HTMLButtonElement;
calculateMemoryMultiplyButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue *= currentValue;
    }
});