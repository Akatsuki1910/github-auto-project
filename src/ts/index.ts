// ... (Existing code)

document.getElementById('toggle-visibility')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.style.display = historyDisplay.style.display === 'none' ? 'block' : 'none';
    }
});

// ... (rest of the existing code)