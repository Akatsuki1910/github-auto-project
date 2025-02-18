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

// ... other functions

document.getElementById('sign-change')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)){
            currentValue *= -1;
            display.value = currentValue.toString();
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

document.getElementById('square')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = (num * num).toString();
        }
    }
});