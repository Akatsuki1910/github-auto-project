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