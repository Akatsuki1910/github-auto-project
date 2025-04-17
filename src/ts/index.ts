// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const nthrootButton = document.getElementById('nthroot');
    // ... (Existing code)
    const squaredButton = document.getElementById('squared');
    const cubeRootButton = document.getElementById('cube-root');
    const doubleButton = document.getElementById('double');
    if (squaredButton) {
        squaredButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const squaredValue = Math.pow(currentValue, 2);
            display.value = squaredValue.toString();
            addToHistory(`${currentValue}^2 = ${squaredValue}`);
        });
    }
    if (cubeRootButton) {
        cubeRootButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const cubeRootValue = Math.cbrt(currentValue);
            display.value = cubeRootValue.toString();
            addToHistory(`∛${currentValue} = ${cubeRootValue}`);
        });
    }
    if (doubleButton) {
        doubleButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const doubledValue = currentValue * 2;
            display.value = doubledValue.toString();
            addToHistory(`${currentValue} * 2 = ${doubledValue}`);
        });
    }
    function addToHistory(entry) {
        const historyDisplay = document.getElementById('history-display');
        if (historyDisplay) {
            const newEntry = document.createElement('p');
            newEntry.textContent = entry;
            historyDisplay.appendChild(newEntry);
        }
    }
});