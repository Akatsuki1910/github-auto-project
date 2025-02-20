// ... (Existing code)

const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const factorial = (n: number): number => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// ... (Existing code for fibonacci, factorial, toggle-visibility, copy-history)

// ... (Existing code for square, cube, ten-power, log)

// ... (Existing code for sign, abs, round, cbrt)

document.getElementById('floor')?.addEventListener('click', () => {
    const n = parseFloat(prompt('Enter a number:') || '0');
    const result = Math.floor(n);
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `floor(${n}) = ${result}\n`;
    }
});

document.getElementById('ceil')?.addEventListener('click', () => {
    const n = parseFloat(prompt('Enter a number:') || '0');
    const result = Math.ceil(n);
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `ceil(${n}) = ${result}\n`;
    }
});

document.getElementById('power')?.addEventListener('click', () => {
    const base = parseFloat(prompt('Enter the base:') || '0');
    const exponent = parseFloat(prompt('Enter the exponent:') || '0');
    const result = Math.pow(base, exponent);
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `${base}^${exponent} = ${result}\n`;
    }
});