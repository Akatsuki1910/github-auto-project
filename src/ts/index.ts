// ... (Existing code)

// ... (Existing functions)

// ... existing functions

document.getElementById('fibonacci')?.addEventListener('click', () => {
    if (display) {
        const n = parseInt(display.value);
        if (!isNaN(n)){
            display.value = fibonacci(n).toString();
        }
    }
});

function fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// ... (Other existing functions)