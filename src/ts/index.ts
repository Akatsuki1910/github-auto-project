// ... (Existing code)

document.querySelectorAll('.digit, .operator, .decimal').forEach(button => {
    button.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        if (display) {
            display.value += button.textContent;
        }
    });
});

document.querySelector('.equals')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = eval(display.value).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
//Exponetial function
//...(Existing functions)

// Backspace function
document.getElementById('backspace')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value = display.value.slice(0, -1);
    }
});

// Square function
document.getElementById('square')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const currentValue = parseFloat(display.value);
            display.value = (currentValue * currentValue).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});

// Cube function
document.getElementById('cube')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const currentValue = parseFloat(display.value);
            display.value = (currentValue * currentValue * currentValue).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});

// Natural Logarithm function
document.getElementById('ln')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const currentValue = parseFloat(display.value);
            display.value = Math.log(currentValue).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});