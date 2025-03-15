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
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
factorialButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (currentValue >= 0) {
    display.value = factorial(currentValue).toString();
}
});
const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  display.value = (currentValue * currentValue).toString();
});
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (currentValue * currentValue * currentValue).toString();
});
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = (1/currentValue).toString();
});
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.log10(currentValue).toString();
});
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  display.value = Math.exp(currentValue).toString();
});
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.sign(currentValue).toString();
});
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    display.value = Math.round(currentValue).toString();
});