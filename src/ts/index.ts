// ... (Existing code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const history: { expression: string, result: string }[] = [];

// ... other event listeners

const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
        history.push({ expression: display.value, result: result.toString() });
        updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});

function updateHistoryDisplay() {
    historyDisplay.innerHTML = history.map(item => `<div>${item.expression} = ${item.result}</div>`).join('');
}
const absButton = document.getElementById('abs') as HTMLButtonElement;
absButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.abs(currentValue).toString();
    }
    catch (error) {
        display.value = "Error";
    }
});
const historyButton = document.getElementById('history') as HTMLButtonElement;
historyButton.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay.style.display === 'none') {
        historyDisplay.style.display = 'block';
    } else {
        historyDisplay.style.display = 'none';
    }
});
const clearHistoryButton = document.getElementById('clear-history') as HTMLButtonElement;
clearHistoryButton.addEventListener('click', () => {
    history.length = 0; // Clear the history array
    updateHistoryDisplay();
});

//New Feature: Memory Recall Button
const mrButton = document.getElementById('mr') as HTMLButtonElement;
let memoryValue = 0;
mrButton.addEventListener('click', () => {
    display.value = memoryValue.toString();
});
const msButton = document.getElementById('ms') as HTMLButtonElement;
msButton.addEventListener('click', () => {
  memoryValue = parseFloat(display.value);
});