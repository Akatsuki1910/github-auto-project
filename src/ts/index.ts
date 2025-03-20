// ... (Existing code)
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
let memoryValue = 0;
memoryPlusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue += currentValue;
    }
});
memoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});