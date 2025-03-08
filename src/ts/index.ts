// ... (Existing code)
const keyboardToggleButton = document.getElementById('keyboard-toggle') as HTMLButtonElement;
const virtualKeyboard = document.getElementById('virtual-keyboard') as HTMLDivElement;
const display = document.getElementById('display') as HTMLInputElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
let history: string[] = [];

keyboardToggleButton.addEventListener('click', () => {
    // ... (Existing keyboard toggle logic)
});

// ... (Other existing code)

//Added Feature: History and clear history
function updateHistory(expression: string, result: string) {
    history.push(`${expression} = ${result}`);
    renderHistory();
}

function renderHistory() {
    historyDisplay.innerHTML = '';
    history.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        historyDisplay.appendChild(p);
    });
}

const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
  history = [];
  renderHistory();
});

// Example usage within the virtual keyboard click listener or other relevant areas:
//...
else if (key === '=') {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        updateHistory(display.value, result.toString()); //Update History Feature added
    }
    // ... rest of the code
}

const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (-parseFloat(display.value)).toString();
    }
});

const sqrtButton = document.getElementById('sqrt') as HTMLButtonElement;
sqrtButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        if (num >= 0) {
            display.value = Math.sqrt(num).toString();
        } else {
            display.value = "Invalid Input";
        }
    }
});

const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
});

const piButton = document.getElementById('pi') as HTMLButtonElement;
piButton.addEventListener('click', () => {
  display.value += Math.PI.toString();
});

const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    display.value += '**';
});

const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
factorialButton.addEventListener('click', () => {
    const num = parseFloat(display.value);
    if (Number.isInteger(num) && num >= 0) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        display.value = result.toString();
    } else {
        display.value = "Invalid Input";
    }
});

const copyToClipboardButton = document.getElementById('copy-to-clipboard') as HTMLButtonElement;
copyToClipboardButton.addEventListener('click', () => {
  navigator.clipboard.writeText(display.value)
    .then(() => {
      alert('Copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
});