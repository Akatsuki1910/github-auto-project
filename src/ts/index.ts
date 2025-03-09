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

// ... (Rest of the existing code)