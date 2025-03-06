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

const squareButton = document.querySelector('#square') as HTMLButtonElement;
squareButton?.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const inputValue = parseFloat(display.value);
  const result = inputValue * inputValue;
  display.value = result.toString();
});

//Digits
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
    digit.addEventListener('click', () => {
        (document.getElementById('display') as HTMLInputElement).value += digit.textContent;
    });
});
//Operators
const operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', () => {
        (document.getElementById('display') as HTMLInputElement).value += op.textContent;
    });
});