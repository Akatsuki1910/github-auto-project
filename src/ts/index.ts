// ... (Existing code)

// ... (Existing Event Listeners)

// ... (Rest of the code)

//Floor function
document.getElementById('floor')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.floor(num).toString();
        }
    }
});

//Ceil function
document.getElementById('ceil')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.ceil(num).toString();
        }
    }
});

document.getElementById('rand')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = Math.random().toString();
    }
});

document.getElementById('truncate')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        const num = parseFloat(display.value);
        if (!isNaN(num)) {
            display.value = Math.trunc(num).toString();
        }
    }
});