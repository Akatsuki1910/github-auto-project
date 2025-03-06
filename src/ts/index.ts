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
// ... (Rest of the existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;

//Added current expression display
document.querySelectorAll('.digit, .operator, .decimal, .equals').forEach(button => {
    button.addEventListener('click', () => {
        currentExpressionDisplay.textContent = display.value + (button as HTMLButtonElement).textContent;
    });
});

equalsButton.addEventListener('click', () => {
  currentExpressionDisplay.textContent = '';
});

clearHistoryButton.addEventListener('click', () => {
  currentExpressionDisplay.textContent = '';
})
