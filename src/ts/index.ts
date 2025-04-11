// ... (Existing code)
const calculateMemoryStoreButton = document.getElementById('calculate-memory-store') as HTMLButtonElement;
const calculateMemoryRecallButton = document.getElementById('calculate-memory-recall') as HTMLButtonElement;
const calculateMemoryClearButton = document.getElementById('calculate-memory-clear') as HTMLButtonElement;
let memoryValue: number | null = null;

calculateMemoryStoreButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = currentValue;
    }
});

calculateMemoryRecallButton.addEventListener('click', () => {
    if (memoryValue !== null) {
        display.value = memoryValue.toString();
    }
});

calculateMemoryClearButton.addEventListener('click', () => {
    memoryValue = null;
});
// ... (Rest of the code)