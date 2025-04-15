// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const mcButton = document.getElementById('mc') as HTMLButtonElement;
const mrButton = document.getElementById('mr') as HTMLButtonElement;
const mPlusButton = document.getElementById('m-plus') as HTMLButtonElement;
const mMinusButton = document.getElementById('m-minus') as HTMLButtonElement;
const msButton = document.getElementById('ms') as HTMLButtonElement;
let memoryValue = 0;
mcButton.addEventListener('click', () => {
    memoryValue = 0;
    display.value = "0";
});
mrButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
mPlusButton.addEventListener('click', () => {
    try {
        memoryValue += parseFloat(display.value);
        display.value = memoryValue.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
mMinusButton.addEventListener('click', () => {
    try {
        memoryValue -= parseFloat(display.value);
        display.value = memoryValue.toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
msButton.addEventListener('click', () => {
    memoryValue = parseFloat(display.value);
});
// New feature: Percentage calculation
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue / 100).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
//New feature: Toggle History Display
const historyButton = document.getElementById('history') as HTMLButtonElement;
const historyDisplay = document.createElement('div');
historyDisplay.id = 'history-display';
document.body.appendChild(historyDisplay);
let historyVisible = false;
historyButton.addEventListener('click', () => {
    historyVisible = !historyVisible;
    historyDisplay.style.display = historyVisible ? 'block' : 'none';
});
//New feature: Cube root
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.cbrt(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
