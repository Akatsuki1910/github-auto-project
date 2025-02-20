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

document.getElementById('square')?.addEventListener('click', () => {
    const n = parseFloat(prompt('Enter a number to square:') || '0');
    const result = n * n;
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `${n}² = ${result}\n`;
    }
});

document.getElementById('cube')?.addEventListener('click', () => {
    const n = parseFloat(prompt('Enter a number to cube:') || '0');
    const result = n * n * n;
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `${n}³ = ${result}\n`;
    }
});

document.getElementById('ten-power')?.addEventListener('click', () => {
    const n = parseFloat(prompt('Enter a number for 10 to the power of:') || '0');
    const result = Math.pow(10, n);
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `10^${n} = ${result}\n`;
    }
});

document.getElementById('log')?.addEventListener('click', () => {
    const n = parseFloat(prompt('Enter a number for log10:') || '0');
    const result = Math.log10(n);
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `log(${n}) = ${result}\n`;
    }
});
