// ... (Existing code)
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
let memoryValue = 0;
memoryStoreButton.addEventListener('click', () => {
    memoryValue = parseFloat(display.value);
});
memoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});