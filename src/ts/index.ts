// ... (Existing code)
const clearDisplayButton = document.getElementById('clear-display');
const display = document.getElementById('display') as HTMLInputElement;

clearDisplayButton?.addEventListener('click', () => {
    display.value = '';
});

const importHistoryButton = document.getElementById('import-history');
const importFileInput = document.getElementById('import-file');
const historyDisplay = document.getElementById('history-display');
const clearHistoryDisplayButton = document.getElementById('clear-history-display');
const currentTimeButton = document.getElementById('current-time');
const currentDateButton = document.getElementById('date');

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
                displayHistory();
                alert('History imported successfully.');
            } catch (error) {
                alert('Invalid history file.');
            }
        };
        reader.readAsText(file);
    }
});

clearHistoryDisplayButton?.addEventListener('click', () => {
    historyDisplay.innerHTML = '';
});

currentTimeButton?.addEventListener('click',()=>{
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  display.value = timeString;
})

currentDateButton?.addEventListener('click', () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    display.value = dateString;
});

function displayHistory() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    historyDisplay.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}

displayHistory();
