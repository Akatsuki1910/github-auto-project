// ... (Existing code)
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
let memoryValue = 0;
memoryPlusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue += currentValue;
    }
});