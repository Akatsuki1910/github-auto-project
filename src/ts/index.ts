// ... (Existing code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const openHistoryButton = document.getElementById('open-history') as HTMLButtonElement;
let history: string[] = [];
openHistoryButton.addEventListener('click', () => {
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
        historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join(''); // Display history items with <p> tags for better formatting
    }
    else {
        historyDisplay.style.display = 'none';
    }
});
const equalsButton = document.getElementById('=') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const display = document.getElementById('display') as HTMLInputElement;
        // ... existing calculation logic (replace with actual calculation)
        const lastAnswer = eval(display.value); // Example calculation. Replace with your actual logic
        display.value = lastAnswer.toString();
        history.push(display.value); // Add to history
    }
    catch (error) {
        // ... existing error handling
    }
});
//Existing code ...
// ... existing functions
const roundButton = document.getElementById('round') as HTMLButtonElement;
roundButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    display.value = Math.round(currentValue).toString();
});
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value + display.value;
});