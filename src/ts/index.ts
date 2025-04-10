// ... (Existing code)
const calculateNthPowerButton = document.getElementById('calculate-nth-power') as HTMLButtonElement;
calculateNthPowerButton.addEventListener('click', () => {
    const base = parseFloat(display.value);
    const exponent = parseFloat(prompt('Enter the exponent (n):', '2'));
    if (isNaN(base) || isNaN(exponent)) {
        display.value = 'Error';
    }
    else {
        display.value = Math.pow(base, exponent).toString();
    }
});
let memoryValue = 0;
const calculateMemoryStoreButton = document.getElementById('calculate-memory-store') as HTMLButtonElement;
calculateMemoryStoreButton.addEventListener('click', () => {
    memoryValue = parseFloat(display.value);
});
const calculateMemoryRecallButton = document.getElementById('calculate-memory-recall') as HTMLButtonElement;
calculateMemoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
const calculateMemoryClearButton = document.getElementById('calculate-memory-clear') as HTMLButtonElement;
calculateMemoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
const calculateMemoryPlusButton = document.getElementById('calculate-memory-plus') as HTMLButtonElement;
calculateMemoryPlusButton.addEventListener('click', () => {
    memoryValue += parseFloat(display.value);
});
const calculateMemoryMinusButton = document.getElementById('calculate-memory-minus') as HTMLButtonElement;
calculateMemoryMinusButton.addEventListener('click', () => {
    memoryValue -= parseFloat(display.value);
});
const calculateSignChangeButton = document.getElementById('calculate-sign-change') as HTMLButtonElement;
calculateSignChangeButton.addEventListener('click', () => {
    display.value = (-parseFloat(display.value)).toString();
});
const calculatePercentOfTotalButton = document.getElementById('calculate-percent-of-total') as HTMLButtonElement;
calculatePercentOfTotalButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (currentValue / 100).toString();
});
// ... (Rest of the code)