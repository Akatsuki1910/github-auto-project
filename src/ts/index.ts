// ... (Existing code)
const exportHistoryButton = document.getElementById('export-history');
exportHistoryButton?.addEventListener('click', () => {
    const history = localStorage.getItem('calculatorHistory');
    if (history) {
        const historyData = JSON.parse(history);
        const historyString = JSON.stringify(historyData, null, 2);
        const blob = new Blob([historyString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'calculator_history.json';
        a.click();
        URL.revokeObjectURL(url);
    }
    else {
        alert('No history to export.');
    }
});