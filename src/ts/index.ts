// ... (Existing code)
const calculateMemoryAddButton = document.getElementById('calculate-memory-add') as HTMLButtonElement;
calculateMemoryAddButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue += currentValue;
    }
});