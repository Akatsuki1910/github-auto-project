// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
let currentExpression = '';
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
let lastAnswer = 0;
let memoryValue = 0; 
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];
// ... (Other existing code and functions)
// ... existing filters
//Absolute Value
// ... (Existing functions)
//Floor function
// ... existing code
// ... (Existing functions)
// ... existing buttons
// ... existing toggle functions
// ... existing functions for month, year, day, second, millisecond, minute, hour, etc.
// ... existing functions
// ... existing functions
// ... (Existing functions)
// ... existing event listeners
const currentScrollYButton = document.getElementById('current-scrollY') as HTMLButtonElement;
currentScrollYButton.addEventListener('click', () => {
    display.value = window.scrollY.toString();
});
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
    memoryValue = parseFloat(display.value);
});
memoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
    display.value = Math.PI.toString();
});
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (currentValue / 100).toString();
});
const plusMinusButton = document.getElementById('plus-minus') as HTMLButtonElement;
plusMinusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (-currentValue).toString();
});