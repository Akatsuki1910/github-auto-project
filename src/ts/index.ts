// Calculator state
let currentValue = '0';
let memory = 0;
let currentExpression = '';
let lastOperation: string | null = null;
let clearOnNextInput = false;

// DOM Elements
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
const historyDiv = document.getElementById('history') as HTMLDivElement;

// Animation functions
const addButtonAnimation = (button: HTMLElement) => {
    button.classList.add('button-press-animation');
    setTimeout(() => button.classList.remove('button-press-animation'), 150);
};

const addDisplayUpdateAnimation = () => {
    display.classList.add('display-update-animation');
    setTimeout(() => display.classList.remove('display-update-animation'), 200);
};

const addErrorAnimation = () => {
    display.classList.add('error-animation');
    setTimeout(() => display.classList.remove('error-animation'), 300);
};

// Initialize display with animation
display.value = currentValue;
addDisplayUpdateAnimation();

// Theme toggle
document.getElementById('toggle-theme')?.addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
});

// Utility functions
const updateDisplay = (value: string, isError: boolean = false) => {
    display.value = value;
    currentValue = value;
    if (isError) {
        addErrorAnimation();
    } else {
        addDisplayUpdateAnimation();
    }
};

const addToHistory = (expression: string, result: string) => {
    const historyItem = document.createElement('div');
    historyItem.textContent = `${expression} = ${result}`;
    historyDiv.insertBefore(historyItem, historyDiv.firstChild);
};

// Number input handlers
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
numbers.forEach(num => {
    document.getElementById(num)?.addEventListener('click', (e) => {
        const button = e.currentTarget as HTMLElement;
        addButtonAnimation(button);
        if (clearOnNextInput) {
            currentValue = '';
            clearOnNextInput = false;
        }
        if (num === '.' && currentValue.includes('.')) return;
        if (currentValue === '0' && num !== '.') {
            currentValue = num;
        } else {
            currentValue += num;
        }
        updateDisplay(currentValue);
    });
});

// Basic operations
const operations = ['+', '-', '*', '/'];
operations.forEach(op => {
    const opId = op === '*' ? 'multiply' : 
                 op === '/' ? 'divide' : 
                 op === '+' ? 'plus' : 'minus';
    
    document.getElementById(opId)?.addEventListener('click', (e) => {
        const button = e.currentTarget as HTMLElement;
        addButtonAnimation(button);
        if (lastOperation) {
            currentExpression = `${currentExpression} ${currentValue} ${op}`;
        } else {
            currentExpression = `${currentValue} ${op}`;
        }
        currentExpressionDisplay.textContent = currentExpression;
        lastOperation = op;
        clearOnNextInput = true;
    });
});

// Equals handler
document.getElementById('equals')?.addEventListener('click', () => {
    if (!lastOperation) return;
    
    currentExpression = `${currentExpression} ${currentValue}`;
    try {
        // Safe eval alternative
        const result = Function('return ' + currentExpression.replace(/[^0-9+\-*/. ]/g, ''))();
        addToHistory(currentExpression, result.toString());
        updateDisplay(result.toString());
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
        lastOperation = null;
        clearOnNextInput = true;
    } catch (e) {
        updateDisplay('Error', true);
        currentExpression = '';
        currentExpressionDisplay.textContent = '';
        lastOperation = null;
    }
});

// Clear handlers
document.getElementById('clear')?.addEventListener('click', () => {
    currentValue = '0';
    currentExpression = '';
    lastOperation = null;
    currentExpressionDisplay.textContent = '';
    updateDisplay(currentValue);
});

document.getElementById('clear-history')?.addEventListener('click', () => {
    historyDiv.innerHTML = '';
});

document.getElementById('backspace')?.addEventListener('click', () => {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay(currentValue);
});

// Memory functions
document.getElementById('memory-store')?.addEventListener('click', () => {
    memory = parseFloat(currentValue);
    clearOnNextInput = true;
});

document.getElementById('memory-recall')?.addEventListener('click', () => {
    updateDisplay(memory.toString());
    clearOnNextInput = true;
});

document.getElementById('memory-clear')?.addEventListener('click', () => {
    memory = 0;
});

document.getElementById('memory-add')?.addEventListener('click', () => {
    memory += parseFloat(currentValue);
});

document.getElementById('memory-subtract')?.addEventListener('click', () => {
    memory -= parseFloat(currentValue);
});

// Scientific functions
document.getElementById('sin')?.addEventListener('click', () => {
    updateDisplay(Math.sin(parseFloat(currentValue)).toString());
});

document.getElementById('cos')?.addEventListener('click', () => {
    updateDisplay(Math.cos(parseFloat(currentValue)).toString());
});

document.getElementById('tan')?.addEventListener('click', () => {
    updateDisplay(Math.tan(parseFloat(currentValue)).toString());
});

document.getElementById('log')?.addEventListener('click', () => {
    updateDisplay(Math.log10(parseFloat(currentValue)).toString());
});

document.getElementById('ln')?.addEventListener('click', () => {
    updateDisplay(Math.log(parseFloat(currentValue)).toString());
});

document.getElementById('sqrt')?.addEventListener('click', () => {
    updateDisplay(Math.sqrt(parseFloat(currentValue)).toString());
});

document.getElementById('power-of-two')?.addEventListener('click', () => {
    updateDisplay(Math.pow(parseFloat(currentValue), 2).toString());
});

document.getElementById('power-of-three')?.addEventListener('click', () => {
    updateDisplay(Math.pow(parseFloat(currentValue), 3).toString());
});

document.getElementById('factorial')?.addEventListener('click', () => {
    const n = parseInt(currentValue);
    if (n < 0 || n > 170) {
        updateDisplay('Error');
        return;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    updateDisplay(result.toString());
});

// Constants
document.getElementById('pi')?.addEventListener('click', () => {
    updateDisplay(Math.PI.toString());
    clearOnNextInput = true;
});

document.getElementById('e')?.addEventListener('click', () => {
    updateDisplay(Math.E.toString());
    clearOnNextInput = true;
});

// Additional functions
document.getElementById('percentage')?.addEventListener('click', () => {
    updateDisplay((parseFloat(currentValue) / 100).toString());
});

document.getElementById('inverse')?.addEventListener('click', () => {
    updateDisplay((1 / parseFloat(currentValue)).toString());
});

document.getElementById('abs')?.addEventListener('click', () => {
    updateDisplay(Math.abs(parseFloat(currentValue)).toString());
});

// Utility functions
document.getElementById('copy')?.addEventListener('click', () => {
    navigator.clipboard.writeText(currentValue);
});

document.getElementById('current-time')?.addEventListener('click', () => {
    const now = new Date();
    updateDisplay(now.toLocaleTimeString());
    clearOnNextInput = true;
});

document.getElementById('current-date')?.addEventListener('click', () => {
    const now = new Date();
    updateDisplay(now.toLocaleDateString());
    clearOnNextInput = true;
});