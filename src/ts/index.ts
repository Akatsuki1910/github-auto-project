// ... (Existing code)
const calculateMemoryStoreButton = document.getElementById('calculate-memory-store') as HTMLButtonElement;
const calculateMemoryRecallButton = document.getElementById('calculate-memory-recall') as HTMLButtonElement;
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
// ... (Rest of the code)