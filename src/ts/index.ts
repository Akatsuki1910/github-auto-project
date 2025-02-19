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
//Log base 10 function
// Inverse function
// Round function
// Sine function
document.getElementById('cos')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = Math.cos(parseFloat(display.value)).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
// Tangent function
document.getElementById('tan')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = Math.tan(parseFloat(display.value)).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
//Ceil function
document.getElementById('ceil')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = Math.ceil(parseFloat(display.value)).toString();
        }
        catch (error) {
            display.value = "Error";
        }
    }
});
// Absolute function
document.getElementById('abs')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = Math.abs(parseFloat(display.value)).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});