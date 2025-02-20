// ... (Existing code)

const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const factorial = (n: number): number => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

document.getElementById('fibonacci')?.addEventListener('click', () => {
    const n = parseInt(prompt('Enter a number for Fibonacci calculation:') || '0', 10);
    const result = fibonacci(n);
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `Fibonacci(${n}) = ${result}\n`;
    }
});

document.getElementById('factorial')?.addEventListener('click', () => {
    const n = parseInt(prompt('Enter a non-negative integer for factorial calculation:') || '0', 10);
    if (n < 0) {
        alert('Factorial is not defined for negative numbers.');
        return;
    }
    const result = factorial(n);
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.innerText += `Factorial(${n}) = ${result}\n`;
    }
});

document.getElementById('toggle-visibility')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
        historyDisplay.style.display = historyDisplay.style.display === 'none' ? 'block' : 'none';
    }
});

document.getElementById('copy-history')?.addEventListener('click', () => {
    const historyDisplay = document.getElementById('history-display') as HTMLDivElement;
    if (historyDisplay) {
      navigator.clipboard.writeText(historyDisplay.innerText).then(() => {
        alert('History copied to clipboard!');
      });
    }
});