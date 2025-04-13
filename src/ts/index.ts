// ... (Existing code)
const calculateMemoryDivideButton = document.getElementById('calculate-memory-divide') as HTMLButtonElement;
calculateMemoryDivideButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        memoryValue /= currentValue;
    }
});