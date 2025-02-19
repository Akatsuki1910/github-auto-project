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
// Cosine function
// Tangent function
//Ceil function
// Absolute function
document.getElementById('floor')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        try {
            display.value = Math.floor(parseFloat(display.value)).toString();
        } catch (error) {
            display.value = "Error";
        }
    }
});
//Euler's number
document.getElementById('e')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        display.value += Math.E.toString();
    }
});
//Parenthesis
let parenthesisCount = 0;
document.getElementById('parenthesis')?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
        if (parenthesisCount % 2 === 0) {
            display.value += '(';
        } else {
            display.value += ')';
        }
        parenthesisCount++;
    }
});