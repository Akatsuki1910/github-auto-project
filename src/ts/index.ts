// ... (Existing code)
const parenthesisOpenButton = document.getElementById('parenthesis-open') as HTMLButtonElement;
parenthesisOpenButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '(';
});
const parenthesisCloseButton = document.getElementById('parenthesis-close') as HTMLButtonElement;
parenthesisCloseButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ')';
});
const deleteButton = document.getElementById('delete') as HTMLButtonElement;
deleteButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value.slice(0, -1);
});
let ans = 0;
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton?.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        ans = math.evaluate(display.value);
        display.value = ans.toString();
    }
    catch (e) {
        display.value = 'Error';
    }
});
const ansButton = document.getElementById('ans') as HTMLButtonElement;
ansButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ans.toString();
});
const percentButton = document.getElementById('percent') as HTMLButtonElement;
percentButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        const currentValue = parseFloat(display.value);
        display.value = (currentValue / 100).toString();
    }
    catch (e) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)