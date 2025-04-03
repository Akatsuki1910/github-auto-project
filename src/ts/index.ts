// ... (Existing code)
const cubedButton = document.getElementById('cubed') as HTMLButtonElement;
cubedButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue * currentValue).toString();
});
let memoryValue = 0;
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue = parseFloat(display.value);
});
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = memoryValue.toString();
});
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue += parseFloat(display.value);
});
const memoryMinusButton = document.getElementById('memory-minus') as HTMLButtonElement;
memoryMinusButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    memoryValue -= parseFloat(display.value);
});
const memoryDisplayButton = document.getElementById('memory-display') as HTMLButtonElement;
memoryDisplayButton.addEventListener('click', () => {
    alert(`Memory: ${memoryValue}`);
});
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    }
    else {
        display.value = "Error";
    }
});
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = (currentValue / 100).toString();
});
// ... (Rest of the code)