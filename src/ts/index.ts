// ... (Existing code)
let memoryValue = 0;
window.addEventListener('load', () => {
    // ... (Existing code)
    const memoryStoreButton = document.getElementById('memory-store');
    if (memoryStoreButton) {
        memoryStoreButton.addEventListener('click', () => {
            memoryValue = parseFloat(display.value);
        });
    }
    const memoryRecallButton = document.getElementById('memory-recall');
    if (memoryRecallButton) {
        memoryRecallButton.addEventListener('click', () => {
            display.value = memoryValue.toString();
        });
    }
    const memoryClearButton = document.getElementById('memory-clear');
    if (memoryClearButton) {
        memoryClearButton.addEventListener('click', () => {
            memoryValue = 0;
        });
    }
    // ... (rest of the code)
});