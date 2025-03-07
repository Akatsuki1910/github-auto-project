// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let memoryValue = 0;
// Memory Store
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue = currentValue;
    }
});
// Memory Recall
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
// Memory Clear
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
// ... other functions
// Cube Root
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.cbrt(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `cbrt(${currentValue}) = ${result}`;
    }
});
//Clear Entry
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    display.value = '';
});
//Ln
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        const result = Math.log(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `ln(${currentValue}) = ${result}`;
    }
    else {
        display.value = "Error";
        currentExpressionDisplay.textContent = "Invalid input for ln";
    }
});
//Euler's number
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value = Math.E.toString();
});
const doubleButton = document.getElementById('double') as HTMLButtonElement;
doubleButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = currentValue * 2;
        display.value = result.toString();
        currentExpressionDisplay.textContent = `${currentValue} * 2 = ${result}`;
    }
});
// Basic Calculator Functions
// ... (rest of the code)