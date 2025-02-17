// ... (Existing code)

// ... (Existing Event Listeners)

// ... (Rest of the code)
document.getElementById('pi')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value += Math.PI.toString();
    }
});

document.getElementById('factorial')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = factorial(num).toString();
        }
    }
});

function factorial(n: number): number {
    if (n < 0) {
        return NaN; // Factorial is not defined for negative numbers
    } else if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

document.getElementById('log')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.log10(num).toString();
        }
    }
});