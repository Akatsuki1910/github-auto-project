// ... (Existing code)
let memoryValue = 0;
const memoryStoreButton = document.getElementById('memory-store');
const memoryRecallButton = document.getElementById('memory-recall');
const memoryClearButton = document.getElementById('memory-clear');
const memoryPlusButton = document.getElementById('m-plus');
if (memoryStoreButton) {
    memoryStoreButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        memoryValue = parseFloat(display.value);
    });
}
if (memoryRecallButton) {
    memoryRecallButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = memoryValue.toString();
    });
}
if (memoryClearButton) {
    memoryClearButton.addEventListener('click', () => {
        memoryValue = 0;
    });
}
if (memoryPlusButton) {
    memoryPlusButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        memoryValue += parseFloat(display.value);
        display.value = memoryValue.toString();
    });
}
const duplicateButton = document.getElementById('duplicate');
if (duplicateButton) {
    duplicateButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = display.value + display.value;
    });
}
// ... (Existing code)