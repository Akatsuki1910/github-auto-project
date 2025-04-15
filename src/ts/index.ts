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
// Percentage calculation
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
// Toggle History Display
const historyButton = document.getElementById('history') as HTMLButtonElement;
const historyDisplay = document.createElement('div');
historyDisplay.id = 'history-display';
document.body.appendChild(historyDisplay);
let historyVisible = false;
historyButton.addEventListener('click', () => {
    historyVisible = !historyVisible;
    historyDisplay.style.display = historyVisible ? 'block' : 'none';
});
// Cube root
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
//New Feature: Power
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    try {
        const base = parseFloat(display.value);
        const exponent = prompt("Enter exponent:");
        if (exponent !== null) {
            display.value = Math.pow(base, parseFloat(exponent)).toString();
        }
    }
    catch (error) {
        display.value = "Error";
    }
});
// New Feature: Natural Logarithm (ln)
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.log(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// New Feature: expm1
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.expm1(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
// New Feature: Sine function
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.sin(currentValue).toString();
    } catch (error) {
        display.value = "Error";
    }
});