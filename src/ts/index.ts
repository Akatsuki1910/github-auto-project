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

// ... (Rest of the existing code)