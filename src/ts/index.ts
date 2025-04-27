// ... (Existing code)
const importHistoryButton = document.getElementById('import-history');
const importFileInput = document.getElementById('import-file');

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
                // Display imported history in the console
                console.log('Imported History:', historyData);
                // Add imported history to the current history
                const currentHistory = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
                localStorage.setItem('calculatorHistory', JSON.stringify(currentHistory.concat(historyData)));
                alert('History imported successfully.');
            } catch (error) {
                alert('Invalid history file.');
            }
        };
        reader.readAsText(file);
    }
});