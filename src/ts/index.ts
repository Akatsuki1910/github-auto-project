// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let memory = 0;
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
const modulusButton = document.getElementById('modulus') as HTMLButtonElement;
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
const switchSignButton = document.getElementById('switch-sign') as HTMLButtonElement;
const cubeRootButton = document.getElementById('cube-root') as HTMLButtonElement;
const calculatePowerOfTwoButton = document.getElementById('calculate-power-of-two') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    memory += parseFloat(display.value);
    console.log("Memory:", memory);
});
memoryRecallButton.addEventListener('click', () => {
    display.value = memory.toString();
    console.log("Memory recalled:", memory);
});
memoryClearButton.addEventListener('click', () => {
    memory = 0;
    console.log("Memory cleared");
});
modulusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});
inverseButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    }
    else if (currentValue === 0) {
        display.value = "Cannot divide by zero";
    }
});
switchSignButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});
cubeRootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.cbrt(currentValue).toString();
    }
});
calculatePowerOfTwoButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(2, currentValue).toString();
    }
});