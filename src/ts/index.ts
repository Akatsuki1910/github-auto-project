// ... (Existing code)
const historyButton = document.getElementById('history');
historyButton?.addEventListener('click', () => {
    const history = localStorage.getItem('calculatorHistory');
    if (history) {
        const historyData = JSON.parse(history);
        alert(JSON.stringify(historyData, null, 2));
    } else {
        alert('No history yet.');
    }
});

const display = document.getElementById('display') as HTMLInputElement;
display.addEventListener('dblclick', () => {
    navigator.clipboard.writeText(display.value).then(() => {
        alert('Copied to clipboard!');
    });
});