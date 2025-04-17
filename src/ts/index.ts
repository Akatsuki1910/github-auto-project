// ... (Existing code)
window.addEventListener('load', () => {
    // ... (Existing code)
    const display = document.getElementById('display');
    // ... (Existing code)
    const nthrootButton = document.getElementById('nthroot');
    if (nthrootButton) {
        nthrootButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const root = prompt("Enter the root value:", "2");
            if (root !== null && !isNaN(parseInt(root))) {
                const nthrootValue = Math.pow(currentValue, 1 / parseInt(root));
                display.value = nthrootValue.toString();
                const historyDisplay = document.getElementById('history-display');
                if (historyDisplay) {
                    const newEntry = document.createElement('p');
                    newEntry.textContent = `${currentValue}^(1/${root}) = ${nthrootValue}`;
                    historyDisplay.appendChild(newEntry);
                }
            }
        });
    }
    const cubeButton = document.getElementById('cube');
    if (cubeButton) {
        cubeButton.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const cubedValue = Math.pow(currentValue, 3);
            display.value = cubedValue.toString();
            const historyDisplay = document.getElementById('history-display');
            if (historyDisplay) {
                const newEntry = document.createElement('p');
                newEntry.textContent = `${currentValue}^3 = ${cubedValue}`;
                historyDisplay.appendChild(newEntry);
            }
        });
    }
    const log10Button = document.getElementById('log10');
    if (log10Button) {
        log10Button.addEventListener('click', () => {
            const currentValue = parseFloat(display.value);
            const log10Value = Math.log10(currentValue);
            display.value = log10Value.toString();
            const historyDisplay = document.getElementById('history-display');
            if (historyDisplay) {
                const newEntry = document.createElement('p');
                newEntry.textContent = `log₁₀(${currentValue}) = ${log10Value}`;
                historyDisplay.appendChild(newEntry);
            }
        });
    }
});