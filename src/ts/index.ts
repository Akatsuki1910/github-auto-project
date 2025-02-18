// ... (Existing code)

// ... (Existing Event Listeners)

// ... (Rest of the code)

//Factorial function
document.getElementById('factorial')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseInt(display.value);
        if (!isNaN(num)) {
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            display.value = result.toString();
        }
    }
});

//Square Root function
document.getElementById('square-root')?.addEventListener('click', () => {
    // ... existing code
});

// Power function
document.getElementById('power')?.addEventListener('click', () => {
    // ... existing code
});

// Percentage function
document.getElementById('percentage')?.addEventListener('click', () => {
    // ... existing code
});

// Negate function
document.getElementById('negate')?.addEventListener('click', () => {
    // ... existing code
});

//Pi function
document.getElementById('pi')?.addEventListener('click', () => {
  // ... existing code
});

//Euler's number function
document.getElementById('euler')?.addEventListener('click', () => {
    // ... existing code
});

document.getElementById('log')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.log10(num).toString();
        }
    }
});

document.getElementById('ln')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.log(num).toString();
        }
    }
});

// ... (Rest of the functions)

// Clear Display button functionality
document.getElementById('clear-display')?.addEventListener('click', () => {
    // ... existing code
});