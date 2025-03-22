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
    if (key === 'Escape') {
        display.value = '';
        currentExpressionDisplay.textContent = '';
    }
    if (key === 'Enter') {
        try {
            // Evaluate the expression and update the display
            const result = eval(display.value); // Added eval for basic calculation
            display.value = result.toString();
            //Append calculation to history
            const historyEntry = document.createElement('p');
            historyEntry.textContent = `${display.value}`;
            historyDisplay.appendChild(historyEntry);

            // Added localStorage to save history
            let history = localStorage.getItem('calculatorHistory') || '';
            history += `${display.value}\n`;
            localStorage.setItem('calculatorHistory', history);
            //Added history clearing functionality
            const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
            clearHistoryButton.addEventListener('click', () => {
                localStorage.removeItem('calculatorHistory');
                historyDisplay.innerHTML = ''; // Clear the display
                // Added alert for history clearing confirmation
                alert('Calculation history cleared!'); // New Feature
//Added current date and time to history on calculation
                const now = new Date();
                const dateTimeString = now.toLocaleString();
                historyEntry.textContent += ` (${dateTimeString})`;
            });
// Added backspace functionality
const backspaceButton = document.getElementById('backspace') as HTMLButtonElement;
backspaceButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
        }
        catch (error) {
            // Handle errors
            display.value = 'Error';
        }
    }
});