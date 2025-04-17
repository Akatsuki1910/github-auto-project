// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const nthrootButton = document.getElementById('nthroot');
    // ... (Existing code)
    const squaredButton = document.getElementById('squared');
    const cubeRootButton = document.getElementById('cube-root');
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
    if (cubeRootButton) {
        cubeRootButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const cubeRootValue = Math.cbrt(currentValue);
            display.value = cubeRootValue.toString();
            const historyDisplay = document.getElementById('history-display');
            if (historyDisplay) {
                const newEntry = document.createElement('p');
                newEntry.textContent = `∛${currentValue} = ${cubeRootValue}`;
                historyDisplay.appendChild(newEntry);
            }
        });
    }
});