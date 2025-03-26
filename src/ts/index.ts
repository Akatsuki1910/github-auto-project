// ... (Existing code)
let memoryValue = 0;
const memoryStoreButton = document.getElementById('memory-store');
const memoryRecallButton = document.getElementById('memory-recall');
const memoryClearButton = document.getElementById('memory-clear');
const memoryPlusButton = document.getElementById('m-plus');
const memoryMinusButton = document.getElementById('m-minus');
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
if (memoryMinusButton) {
    memoryMinusButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        memoryValue -= parseFloat(display.value);
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
const log2Button = document.getElementById('log2');
if (log2Button) {
    log2Button.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = (Math.log2(parseFloat(display.value))).toString();
    });
}
// ... (Existing code)