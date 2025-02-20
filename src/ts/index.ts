// ... (Existing code)

document.getElementById('toggle-visibility')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.style.display = historyDisplay.style.display === 'none' ? 'block' : 'none';
    }
});

document.getElementById('copy-history')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
      navigator.clipboard.writeText(historyDisplay.innerText).then(() => {
        alert('History copied to clipboard!');
      });
    }
});

// ... (rest of the existing code)