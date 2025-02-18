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
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.sqrt(num).toString();
        }
    }
});

// Power function
document.getElementById('power')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const base = parseFloat(display.value);
        display.value = ''; // Clear for next input
        document.addEventListener('input', powerInputListener);
        function powerInputListener() {
            const exponent = parseFloat(display.value);
            if (!isNaN(exponent)) {
                display.value = Math.pow(base, exponent).toString();
                document.removeEventListener('input', powerInputListener);
            }
        }
    }
});

// Percentage function
document.getElementById('percentage')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = (num / 100).toString();
        }
    }
});

// Negate function
document.getElementById('negate')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = (-num).toString();
        }
    }
});

//Pi function
document.getElementById('pi')?.addEventListener('click', () => {
  const display = document.getElementById('display') as HTMLInputElement;
  if (display) {
    display.value = Math.PI.toString();
  }
});


// ... (Rest of the functions)

// Clear Display button functionality
document.getElementById('clear-display')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = ''; // Clear the display
    }
});