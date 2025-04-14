// ... (Existing code)
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
let memoryValue = 0;
memoryStoreButton.addEventListener('click', () => {
    memoryValue = parseFloat(display.value);
});