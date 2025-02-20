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

document.getElementById('sign')?.addEventListener('click', () => {
    const n = parseFloat(prompt('Enter a number:') || '0');
    const result = Math.sign(n);
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `sign(${n}) = ${result}\n`;
    }
});