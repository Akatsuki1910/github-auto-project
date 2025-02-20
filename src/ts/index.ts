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

// ... (Existing sin, cos, tan event listeners)

// ... (Existing ln, e, inverse event listeners)

document.getElementById('mod')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    // Implement modulo operation. Needs second operand
    // Placeholder for now.
    display.value = "modulus needs 2nd operand";
});

document.getElementById('trunc')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = parseFloat(display.value);
    const result = Math.trunc(currentValue);
    display.value = result.toString();
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `trunc(${currentValue}) = ${result}\n`;
    }
});