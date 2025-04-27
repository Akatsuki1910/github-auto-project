// ... (Existing code)
const clearDisplayButton = document.getElementById('clear-display');
const display = document.getElementById('display') as HTMLInputElement;

clearDisplayButton?.addEventListener('click', () => {
    display.value = '';
});

const importHistoryButton = document.getElementById('import-history');
const importFileInput = document.getElementById('import-file');
const historyDisplay = document.getElementById('history-display');

importHistoryButton?.addEventListener('click', () => {
    importFileInput?.click();
});

importFileInput?.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const historyData = JSON.parse(e.target.result);
                localStorage.setItem('calculatorHistory', JSON.stringify(historyData));
                console.log('Imported History:', historyData);
                const currentHistory = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
                localStorage.setItem('calculatorHistory', JSON.stringify(currentHistory));
                alert('History imported successfully.');
                displayHistory();
            } catch (error) {
                alert('Invalid history file.');
            }
        };
        reader.readAsText(file);
    }
});

function displayHistory() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}

displayHistory();