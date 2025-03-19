// ... (Existing code)
const mcButton = document.getElementById('mc') as HTMLButtonElement;
let memory = 0;
mcButton.addEventListener('click', () => {
    memory = 0;
display.value = '0';
});
const parenthesesButton = document.getElementById('parentheses') as HTMLButtonElement;
let parenthesesOpen = true;
parenthesesButton.addEventListener('click', () => {
    if (parenthesesOpen) {
        display.value += '(';
        parenthesesOpen = false;
    }
    else {
        display.value += ')';
        parenthesesOpen = true;
    }
});
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value = Math.E.toString();
});
const ansButton = document.getElementById('ans') as HTMLButtonElement;
let lastAnswer = '';
ansButton.addEventListener('click', () => {
    display.value += lastAnswer;
});
equalsButton.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        lastAnswer = result.toString();
        display.value = result.toString();
        // ... (Existing code)
    }
    catch (error) {
        display.value = 'Error';
    }
});