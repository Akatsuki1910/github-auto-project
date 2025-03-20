// ... (Existing code)
const ansButton = document.getElementById('ans') as HTMLButtonElement;
let lastAnswer = 0;

const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        lastAnswer = result;
    } catch (error) {
        display.value = 'Error';
    }
});

ansButton.addEventListener('click', () => {
    display.value += lastAnswer.toString();
});
const openParenButton = document.getElementById('open-paren') as HTMLButtonElement;
openParenButton.addEventListener('click', () => {
    display.value += '(';
});
const closeParenButton = document.getElementById('close-paren') as HTMLButtonElement;
closeParenButton.addEventListener('click', () => {
    display.value += ')';
});