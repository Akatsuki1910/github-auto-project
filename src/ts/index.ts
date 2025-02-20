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
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const result = Math.sin(currentValue);
    display.value = result.toString();

    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `sin(${currentValue}) = ${result}\n`;
    }
});

document.getElementById('cos')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const result = Math.cos(currentValue);
    display.value = result.toString();

    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `cos(${currentValue}) = ${result}\n`;
    }
});

document.getElementById('tan')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const result = Math.tan(currentValue);
    display.value = result.toString();
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `tan(${currentValue}) = ${result}\n`;
    }
});