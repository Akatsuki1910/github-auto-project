// ... (Existing code)
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
let memoryValue = 0;
memoryStoreButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = currentValue;
    }
});
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
// ... (Rest of existing code)