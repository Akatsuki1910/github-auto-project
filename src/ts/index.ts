// ... (Existing code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const openHistoryButton = document.getElementById('open-history') as HTMLButtonElement;
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
let history: string[] = [];
let ans = 0;

openHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    }
    else {
        historyDisplay.style.display = 'none';
    }
});

clearHistoryButton.addEventListener('click', () => {
    history = [];
    historyDisplay.innerHTML = '';
});

const equalsButton = document.getElementById('=') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const display = document.getElementById('display') as HTMLInputElement;
        ans = eval(display.value);
        display.value = ans.toString();
        history.push(display.value);
    }
    catch (error) {
        // ... existing error handling
    }
});
const ansButton = document.getElementById('toggle-ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ans;
});

// ... other existing code

// ... (Other existing functions)
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    } else {
        display.value = "Cannot divide by zero";
    }
});

const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const inputValue = parseInt(display.value);
    if (isNaN(inputValue)) {
        display.value = "Invalid input for factorial";
    } else {
        let result = 1;
        for (let i = 2; i <= inputValue; i++) {
            result *= i;
        }
        display.value = result.toString();
    }
});

const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue * currentValue).toString();
    }
});

const tenPowerButton = document.getElementById('ten-power') as HTMLButtonElement;
tenPowerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (10 ** currentValue).toString();
    }
});

const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        display.value = Math.log(currentValue).toString();
    } else {
        display.value = "Invalid input for ln";
    }
});

const eulerButton = document.getElementById('euler') as HTMLButtonElement;
eulerButton.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value += Math.E;
});

// ... (Rest of the existing code)