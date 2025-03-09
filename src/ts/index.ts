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
    input.accept = '.txt';
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
//Added Feature: Squared, Cubed, Factorial, Inverse
// ... (Existing code for these features)
//Added Feature: Power (xʸ)
const powerButton = document.getElementById('power') as HTMLButtonElement;
powerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value += '**'; // Use ** as the power operator
    }
});
// ... (Rest of the existing code)