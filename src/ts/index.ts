// ... (Existing code)
const calculateMemoryStoreButton = document.getElementById('calculate-memory-store') as HTMLButtonElement;
let memoryValue: number | null = null;

calculateMemoryStoreButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = currentValue;
    }
});
// ... (Rest of the code)