// ... (Existing code)
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-scheme');
    document.body.classList.toggle('dark-scheme');
});
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const toggleHistoryButton = document.getElementById('toggle-history') as HTMLButtonElement;
toggleHistoryButton.addEventListener('click', () => {
    historyDisplay.style.display = historyDisplay.style.display === 'none' ? 'block' : 'none';
});
const copyButton = document.getElementById('copy') as HTMLButtonElement;
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value);
});
const mainPad = document.querySelector('.main-pad') as HTMLDivElement;
const toggleMainPadButton = document.getElementById('toggle-main-pad') as HTMLButtonElement;
toggleMainPadButton.addEventListener('click', () => {
    mainPad.style.display = mainPad.style.display === 'none' ? 'grid' : 'none';
});
//Added toggle date and time display functionality
const currentDateTimeDisplay = document.getElementById('current-date-time') as HTMLDivElement;
const toggleDateTimeButton = document.getElementById('toggle-date-time') as HTMLButtonElement;
toggleDateTimeButton.addEventListener('click', () => {
    currentDateTimeDisplay.style.display = currentDateTimeDisplay.style.display === 'none' ? 'block' : 'none';
});
setInterval(() => {
    const now = new Date();
    currentDateTimeDisplay.textContent = now.toLocaleString();
}, 1000);
document.addEventListener('keydown', (event) => {
    // ... (rest of the code)
    const key = event.key;
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    if (key === 'Escape') {
        display.value = '';
        currentExpressionDisplay.textContent = '';
    }
    if (key === 'Enter') {
        try {
            // Evaluate the expression and update the display
            const result = eval(display.value);
            display.value = result.toString();
            const historyEntry = document.createElement('p');
            //Added current date and time to history on calculation
            const now = new Date();
            const dateTimeString = now.toLocaleString();
            historyEntry.textContent = `${display.value} (${dateTimeString})`;
            historyDisplay.appendChild(historyEntry);
            let history = localStorage.getItem('calculatorHistory') || '';
            history += `${display.value}\n`;
            localStorage.setItem('calculatorHistory', history);
            const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
            clearHistoryButton.addEventListener('click', () => {
                localStorage.removeItem('calculatorHistory');
                historyDisplay.innerHTML = '';
                alert('Calculation history cleared!');
            });
            const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
            backspaceButton.addEventListener('click', () => {
                display.value = display.value.slice(0, -1);
            });
        }
        catch (error) {
            display.value = 'Error';
        }
    }
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '(', ')'];
    if (allowedKeys.includes(key)) {
        display.value += key;
    }
    localStorage.setItem('displayValue', display.value);
    window.addEventListener('load', () => {
        const savedValue = localStorage.getItem('displayValue');
        if (savedValue) {
            display.value = savedValue;
        }
    });
    // New Feature: Store last result in 'Ans' variable
    if (key === 'Enter' && !display.value.includes('Error')) {
        window.Ans = display.value; // Store current result
    }
    if (display.value === 'Ans') {
        display.value = window.Ans || '';
    }
});
