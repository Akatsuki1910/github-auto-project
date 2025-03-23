// ... (Existing code)
const exportHistoryButton = document.getElementById('export-history') as HTMLButtonElement;
exportHistoryButton.addEventListener('click', () => {
    const historyText = historyDisplay.innerText.replace(/<br>/g, '\n');
    const blob = new Blob([historyText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'calculator_history.txt';
    link.click();
});
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
            //New Feature: Add Vibration on Successful Calculation
            navigator.vibrate(200); // Vibrate for 200ms
			//New Feature: Play a sound on successful calculation
			const audio = new Audio('https://soundbible.com/mp3/Electronic_Chime-KevanGC-495939813.mp3'); // Replace with your sound file
            audio.play();
			// New Feature: Display calculation duration
            const startTime = performance.now();
            const endTime = performance.now();
            const duration = endTime - startTime;
            currentExpressionDisplay.textContent += ` (${duration.toFixed(2)}ms)`;
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
//New Feature: Theme color picker
const themeColorPicker = document.getElementById('theme-color-picker') as HTMLInputElement;
themeColorPicker.addEventListener('input', () => {
    document.body.style.backgroundColor = themeColorPicker.value;
});