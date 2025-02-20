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

document.getElementById('sin')?.addEventListener('click', () => {
    // ... (Existing sin function code)
});

document.getElementById('cos')?.addEventListener('click', () => {
    // ... (Existing cos function code)
});

document.getElementById('tan')?.addEventListener('click', () => {
    // ... (Existing tan function code)
});

document.getElementById('ln')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const result = Math.log(currentValue);
    display.value = result.toString();
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `ln(${currentValue}) = ${result}\n`;
    }
});

document.getElementById('e')?.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  display.value = Math.E.toString();
});