// ... (Existing code)
let memoryValue = 0;
const calculateMemoryStoreButton = document.getElementById('calculate-memory-store') as HTMLButtonElement;
calculateMemoryStoreButton.addEventListener('click', () => {
    memoryValue = parseFloat(display.value);
});
const calculateMemoryRecallButton = document.getElementById('calculate-memory-recall') as HTMLButtonElement;
calculateMemoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
const calculateMemoryClearButton = document.getElementById('calculate-memory-clear') as HTMLButtonElement;
calculateMemoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
const calculateMemoryPlusButton = document.getElementById('calculate-memory-plus') as HTMLButtonElement;
calculateMemoryPlusButton.addEventListener('click', () => {
    memoryValue += parseFloat(display.value);
});
const calculateMemoryMinusButton = document.getElementById('calculate-memory-minus') as HTMLButtonElement;
calculateMemoryMinusButton.addEventListener('click', () => {
    memoryValue -= parseFloat(display.value);
});

// ... (Rest of the code)