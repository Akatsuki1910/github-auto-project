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

document.getElementById('exp')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.exp(num).toString();
        }
    }
});

document.getElementById('clear')?.addEventListener('click', () => {
    (document.getElementById('display') as HTMLInputElement).value = '';
});

document.getElementById('round')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.round(num).toString();
        }
    }
});

document.getElementById('power')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const base = parseFloat(display.value);
        display.value = ''; // Clear the display to enter the exponent
        const exponentInput = prompt('Enter the exponent:')
        if(exponentInput){
            const exponent = parseFloat(exponentInput);
            if(!isNaN(exponent)){
                display.value = Math.pow(base, exponent).toString();
            }
        }
    }
});

document.getElementById('sin')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.sin(num).toString();
        }
    }
});

document.getElementById('cos')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.cos(num).toString();
        }
    }
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