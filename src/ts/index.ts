// ... (Existing code)
const calculateMemoryStoreButton = document.getElementById('calculate-memory-store') as HTMLButtonElement;
let memoryValue = 0;
calculateMemoryStoreButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = currentValue;
    }
});