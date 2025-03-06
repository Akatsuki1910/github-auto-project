// ... (Existing code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const openHistoryButton = document.getElementById('open-history') as HTMLButtonElement;
const clearHistoryButton = document.getElementById('clear-history-button') as HTMLButtonElement;
let history: string[] = [];
let ans = 0;

openHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join(''); // Display history items with <p> tags for better formatting
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
        // ... existing calculation logic (replace with actual calculation)
        ans = eval(display.value); // Example calculation. Replace with your actual logic
        display.value = ans.toString();
        history.push(display.value); // Add to history
    }
    catch (error) {
        // ... existing error handling
    }
});
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ans;
});
//Existing code ...
// ... existing functions

//Added Square function
const squareButton = document.querySelector('#square') as HTMLButtonElement;
squareButton?.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const inputValue = parseFloat(display.value);
  const result = inputValue * inputValue;
  display.value = result.toString();
});

// ... (rest of the code)