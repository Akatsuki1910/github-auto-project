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

document.getElementById('backspace')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = display.value.slice(0, -1);
    }
});

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

document.getElementById('cube')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = (num * num * num).toString();
        }
    }
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

document.getElementById('exp')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.exp(num).toString();
        }
    }
});

document.getElementById('ten-power')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.pow(10, num).toString();
        }
    }
});

document.getElementById('random')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = Math.random().toString();
    }
});

document.getElementById('floor')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.floor(num).toString();
        }
    }
});

document.getElementById('ceil')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.ceil(num).toString();
        }
    }
});

document.getElementById('sign')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.sign(num).toString();
        }
    }
});