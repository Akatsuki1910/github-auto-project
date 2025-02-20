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