// ... (Existing code)
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
const memoryMinusButton = document.getElementById('memory-minus') as HTMLButtonElement;
let memoryValue = 0;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
memoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
memoryPlusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue += currentValue;
    }
});
memoryMinusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue -= currentValue;
    }
});