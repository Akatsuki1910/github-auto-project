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
                console.log(`nth root calculated: ${nthrootValue}`);
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
            // Add to history (for cube function)
            const historyDisplay = document.getElementById('history-display');
            if (historyDisplay) {
                const newEntry = document.createElement('p');
                newEntry.textContent = `${currentValue}^3 = ${cubedValue}`;
                historyDisplay.appendChild(newEntry);
            }
        });
    }
});