// ... (Existing code)

// ... (Existing functions: fibonacci, factorial, etc.)

// ... (Existing event listeners for floor, ceil, power, etc.)

// ... (Existing random, sin, cos, tan event listeners)

// ... (Existing ln, e, inverse event listeners)

// ... (Existing mod, trunc event listeners)

// ... (Existing max, min event listeners)

document.getElementById('hypot')?.addEventListener('click', () => {
  // ... existing hypot code ...
});

// ... existing sum, avg, median, duplicate event listeners

document.getElementById('clear-history')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText = '';
    }
});