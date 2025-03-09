// ... (Existing code)
//Added Feature: Export History
const exportHistoryButton = document.getElementById('export-history') as HTMLButtonElement;
exportHistoryButton.addEventListener('click', () => {
    const historyItems = Array.from(historyDisplay.querySelectorAll('p')).map(item => item.textContent);
    const historyString = historyItems.join('\n');
    const blob = new Blob([historyString], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'calculator_history.txt';
    a.click();
});
//Added Feature: Import History
const importHistoryButton = document.getElementById('import-history') as HTMLButtonElement;
const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
importHistoryButton.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt'; // Accept only text files
    input.addEventListener('change', () => {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result as string;
                const lines = content.split('\n');
                lines.forEach(line => {
                    const p = document.createElement('p');
                    p.textContent = line;
                    historyDisplay.appendChild(p);
                });
            };
            reader.readAsText(file);
        }
    });
    input.click();
});
//Added Feature: Save State
const saveStateButton = document.getElementById('save-state') as HTMLButtonElement;
saveStateButton.addEventListener('click', () => {
    const displayValue = (document.getElementById('display') as HTMLInputElement).value;
    localStorage.setItem('calculatorState', displayValue);
});
// Added Feature: Restore State
const restoreStateButton = document.getElementById('restore-state') as HTMLButtonElement;
restoreStateButton.addEventListener('click', () => {
    const savedState = localStorage.getItem('calculatorState');
    if (savedState) {
        (document.getElementById('display') as HTMLInputElement).value = savedState;
    }
});
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    (document.getElementById('display') as HTMLInputElement).value = '';
});
//Added Feature: Squared
const squaredButton = document.getElementById('squared') as HTMLButtonElement;
squaredButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue).toString();
    }
});
//Added Feature: Cubed
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue * currentValue * currentValue).toString();
    }
});
//Added Feature: Factorial
const factorialButton = document.getElementById('factorial') as HTMLButtonElement;
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
factorialButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && Number.isInteger(currentValue) && currentValue >= 0) {
        display.value = factorial(currentValue).toString();
    }
});
//Added Feature: Inverse
const inverseButton = document.getElementById('inverse') as HTMLButtonElement;
inverseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue) && currentValue !== 0) {
        display.value = (1 / currentValue).toString();
    }
});
// ... (Rest of the existing code)