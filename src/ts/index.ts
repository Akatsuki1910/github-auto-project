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
// ... (Existing functions)
// Sign function
document.getElementById('sign')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const currentValue = parseFloat(display.value);
            display.value = (-currentValue).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
//Log base 10 function
document.getElementById('log')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = Math.log10(parseFloat(display.value)).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
// Inverse function
document.getElementById('inverse')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            const currentValue = parseFloat(display.value);
            display.value = (1/currentValue).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
// Round function
document.getElementById('round')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = Math.round(parseFloat(display.value)).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
// Sine function
document.getElementById('sin')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = Math.sin(parseFloat(display.value)).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});