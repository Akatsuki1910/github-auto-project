// ... (Existing code)
let memoryValue = 0;
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (!isNaN(number)) {
        memoryValue = number;
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
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (!isNaN(number)) {
        memoryValue += number;
    }
});
const memoryMinusButton = document.getElementById('memory-minus') as HTMLButtonElement;
memoryMinusButton.addEventListener('click', () => {
    const currentValue = display.value;
    const number = Number(currentValue);
    if (!isNaN(number)) {
        memoryValue -= number;
    }
});