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
                alert('History imported successfully.');
            } catch (error) {
                alert('Invalid history file.');
            }
        };
        reader.readAsText(file);
    }
});