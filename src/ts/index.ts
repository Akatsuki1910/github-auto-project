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
    if (key === 'Enter' || key === '=') {
        try {
            // New Feature: Evaluate expressions with mathjs
            const result = math.evaluate(display.value);
            display.value = result.toString();
            // ... (rest of the code)
            //New Feature: Add evaluated expression and result to history
            const expression = display.value;
            //New Feature: Add to history with timestamps
            const timestamp = new Date().toLocaleString();
            historyDisplay.innerHTML += `${timestamp}: ${expression}<br>`;
			//New Feature: Clear history button functionality
			const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
			clearHistoryButton.addEventListener('click', () => {
				historyDisplay.innerHTML = ''; // Clear the history display
			});
            // New Feature: Add current expression to history
            const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
            currentExpressionDisplay.textContent = display.value;
            // New Feature: Store result in local storage
            localStorage.setItem('calculatorResult', result.toString());
        }
        catch (error) {
            display.value = 'Error';
        }
    }
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '(', ')'];
    if (allowedKeys.includes(key)) {
        display.value += key;
    }
    let memoryValue = 0;
    if ((key === 'Enter' || key === '=') && !display.value.includes('Error')) {
        window.Ans = display.value;
    }
    if (display.value === 'Ans') {
        display.value = window.Ans || '';
    }
    navigator.vibrate(50);
    if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
    if (key === 'Escape') { // New Feature: Clear display with Escape key
        display.value = '';
    }
});