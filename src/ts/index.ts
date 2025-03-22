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
            historyDisplay.innerHTML += `${expression}<br>`;
        }
        catch (error) {
            display.value = 'Error';
            // Play error sound
            const errorAudio = new Audio('error.mp3'); // Replace with your error sound file
            errorAudio.play();
        }
    }
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '(', ')'];
    if (allowedKeys.includes(key)) {
        display.value += key;
    }
    //New Feature: Implement a simple memory store (single value)
    let memoryValue = 0; // Initialize memoryValue outside the event listener
    // ... existing memory buttons code

    //New Feature: Add last answer functionality
    if ((key === 'Enter' || key === '=') && !display.value.includes('Error')) {
        window.Ans = display.value; // Store current result in global variable
    }
    if (display.value === 'Ans') {
      display.value = window.Ans || ''; // Retrieve previous result from global variable
    }
    //New Feature: Add Vibration on Button Press
        navigator.vibrate(50); // Vibrate for 50ms
    //Added backspace key functionality
        if (key === 'Backspace') {
          display.value = display.value.slice(0, -1);
        }
    // ... (rest of the code)
});
