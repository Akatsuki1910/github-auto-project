// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const nthrootButton = document.getElementById('nthroot');
    // ... (Existing code)
    const squaredButton = document.getElementById('squared');
    if (squaredButton) {
        squaredButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const squaredValue = Math.pow(currentValue, 2);
            display.value = squaredValue.toString();
            const historyDisplay = document.getElementById('history-display');
            if (historyDisplay) {
                const newEntry = document.createElement('p');
                newEntry.textContent = `${currentValue}^2 = ${squaredValue}`;
                historyDisplay.appendChild(newEntry);
            }
        });
    }
});