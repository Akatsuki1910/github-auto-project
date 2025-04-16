// ... (Existing code)
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
const history: string[] = [];

// ... other event listeners

const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = math.evaluate(display.value);
        display.value = result.toString();
        history.push(display.value);
        updateHistoryDisplay();
    } catch (error) {
        display.value = "Error";
    }
});

function updateHistoryDisplay() {
    historyDisplay.innerHTML = history.map(item => `<div>${item}</div>`).join('');
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