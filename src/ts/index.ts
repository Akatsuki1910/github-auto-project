// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const signChangeButton = document.getElementById('sign-change');
const historyDisplay = document.getElementById('history-display');
const historyButton = document.getElementById('history');
const clearLastHistoryButton = document.getElementById('clear-last-history');
const exportHistoryButton = document.getElementById('export-history');
let history: string[] = [];

// ... (Existing event listeners)

exportHistoryButton?.addEventListener('click', () => {
    const historyText = history.join('\n');
    const blob = new Blob([historyText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'calculator_history.txt';
    link.click();
});

// ... (Rest of the existing code)