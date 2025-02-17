// ... (Existing code)

// ... (Existing Event Listeners)

document.getElementById('backspace')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = display.value.slice(0, -1);
    }
});

document.getElementById('sqrt')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.sqrt(currentValue).toString();
        }
    }
});

document.getElementById('square')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.pow(currentValue, 2).toString();
        }
    }
});

// ... (Rest of the code)