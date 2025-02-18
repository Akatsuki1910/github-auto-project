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
    // ... existing code
});

document.getElementById('ln')?.addEventListener('click', () => {
    // ... existing code
});

// Inverse function
document.getElementById('inverse')?.addEventListener('click', () => {
 // ... existing code
});

// Clear button functionality
document.getElementById('clear')?.addEventListener('click', () => {
    (document.getElementById('display') as HTMLInputElement).value = '';
});

// ... (Rest of the functions)

// Clear Display button functionality
document.getElementById('clear-display')?.addEventListener('click', () => {
    // ... existing code
});

document.getElementById('sin')?.addEventListener('click', () => {
// ... existing code
});

document.getElementById('cos')?.addEventListener('click', () => {
// ... existing code
});

document.getElementById('tan')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.tan(num).toString();
        }
    }
});

// Absolute value function
document.getElementById('abs')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.abs(num).toString();
        }
    }
});