// ... (Existing code)

// ... (Existing functions: fibonacci, factorial, etc.)

// ... (Existing event listeners for floor, ceil, power, etc.)

// ... (Existing random, sin, cos, tan event listeners)

// ... (Existing ln, e, inverse event listeners)

// ... (Existing mod, trunc event listeners)

// ... (Existing max, min event listeners)

document.getElementById('hypot')?.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  const currentValue = parseFloat(display.value);
  display.value = "Enter second number for hypot";
    let secondNumber: number;
    const secondNumberInput = prompt("Enter second number:");
        if (secondNumberInput !== null) {
            secondNumber = parseFloat(secondNumberInput);
            if (!isNaN(secondNumber)){
                const result = Math.hypot(currentValue, secondNumber);
                display.value = result.toString();
                const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
                if (historyDisplay) {
                    historyDisplay.innerText += `hypot(${currentValue}, ${secondNumber}) = ${result}\n`;
                }
            } else {
                display.value = "Invalid input";
            }
        }
});

document.getElementById('sum')?.addEventListener('click', () => {
    // ... existing code ...
});

document.getElementById('avg')?.addEventListener('click', () => {
    // ... existing code ...
});

document.getElementById('median')?.addEventListener('click', () => {
   // ... existing code ...
});

document.getElementById('duplicate')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentValue = display.value;
    display.value = currentValue + currentValue; 
});