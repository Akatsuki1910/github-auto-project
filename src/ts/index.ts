// ... (Existing code)

// ... (Existing functions: fibonacci, factorial, etc.)

// ... (Existing event listeners for floor, ceil, power, etc.)

document.getElementById('random')?.addEventListener('click', () => {
    const result = Math.random();
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `random = ${result}\n`;
    }
});