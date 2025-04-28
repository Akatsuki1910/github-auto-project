// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const signChangeButton = document.getElementById('sign-change');
const historyDisplay = document.getElementById('history-display');
const historyButton = document.getElementById('history');
const clearLastHistoryButton = document.getElementById('clear-last-history');
const exportHistoryButton = document.getElementById('export-history');
const importHistoryButton = document.getElementById('import-history');
const lastAnswerButton = document.getElementById('last-answer');
const currentDateButton = document.getElementById('current-date');
let history: string[] = [];
let lastAnswer = '';

// ... (Existing event listeners)

exportHistoryButton?.addEventListener('click', () => {
    const historyText = history.join('\n');
    const blob = new Blob([historyText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'calculator_history.txt';
    link.click();
});

importHistoryButton?.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.addEventListener('change', (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const content = e.target.result;
            history = content.split('\n');
            historyDisplay!.textContent = history.join('\n');
        };
        reader.readAsText(file);
    });
    input.click();
});

lastAnswerButton?.addEventListener('click', () => {
    display.value += lastAnswer;
});

currentDateButton?.addEventListener('click', () => {
  display.value = new Date().toLocaleDateString();
});

// ... (Rest of the existing code)