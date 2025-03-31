// ... (Existing code)
let memoryValue = 0;
let ans = 0;
//Memory Buttons
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
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '%';
});
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = ans.toString();
});
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    }
    else {
        display.value = "Cannot divide by zero";
    }
});
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += display.value;
});
const signChangeButton = document.getElementById('sign-change') as HTMLButtonElement;
signChangeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = (-parseFloat(display.value)).toString();
});
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = (parseFloat(display.value) / 100).toString();
});
// ... (Rest of the code)