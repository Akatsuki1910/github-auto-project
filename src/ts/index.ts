// ... (Existing code)
const calculateMemoryStoreButton = document.getElementById('calculate-memory-store') as HTMLButtonElement;
const calculateMemoryRecallButton = document.getElementById('calculate-memory-recall') as HTMLButtonElement;
let memoryValue = 0;
calculateMemoryStoreButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = currentValue;
    }
});
calculateMemoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});