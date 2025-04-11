// ... (Existing code)
const calculateMemoryPlusButton = document.getElementById('calculate-memory-plus') as HTMLButtonElement;

calculateMemoryPlusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        if (memoryValue === null) {
            memoryValue = 0;
        }
        memoryValue += currentValue;
    }
});
// ... (Rest of the code)