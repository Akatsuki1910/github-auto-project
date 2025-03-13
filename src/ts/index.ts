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
const currentWeekNumberButton = document.getElementById('current-week-number') as HTMLButtonElement;
currentWeekNumberButton.addEventListener('click', () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - startOfYear.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const weekNumber = Math.ceil(diff / oneWeek);
    display.value = weekNumber.toString();
});
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
memoryPlusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        memoryValue += currentValue;
    }
});
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
const squareRootButton = document.getElementById('square-root') as HTMLButtonElement;
squareRootButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue >= 0) {
        display.value = Math.sqrt(currentValue).toString();
    } else {
        display.value = 'Error';
    }
});
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});
const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
  display.value = Math.PI.toString();
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
    if (!isNaN(currentValue) && currentValue >= 0 && Number.isInteger(currentValue)) {
        display.value = factorial(currentValue).toString();
    } else {
        display.value = 'Error';
    }
});
const plusMinusButton = document.getElementById('plus-minus') as HTMLButtonElement;
plusMinusButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (-currentValue).toString();
    }
});
const exponentButton = document.getElementById('exponent') as HTMLButtonElement;
exponentButton.addEventListener('click', () => {
    currentExpression += '**';
    currentExpressionDisplay.textContent = currentExpression;
});
const logButton = document.getElementById('log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        display.value = Math.log10(currentValue).toString();
    } else {
        display.value = 'Error';
    }
});
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.sin(currentValue).toString();
  } else {
    display.value = 'Error';
  }
});
const cosButton = document.getElementById('cos') as HTMLButtonElement;
cosButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    display.value = Math.cos(currentValue).toString();
  } else {
    display.value = 'Error';
  }
});