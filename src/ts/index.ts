// ... (Existing code)
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
    display.value += memory.toString();
});
const memoryPlusButton = document.getElementById('memory-plus') as HTMLButtonElement;
let memory = 0;
memoryPlusButton.addEventListener('click', () => {
    if (display.value) {
        memory += parseFloat(display.value);
    }
});
const percentageButton = document.getElementById('percentage') as HTMLButtonElement;
percentageButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
});
const copyBtn = document.getElementById('copy') as HTMLButtonElement;
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(display.value);
});
const ansBtn = document.getElementById('ans') as HTMLButtonElement;
let lastAnswer = '';
ansBtn.addEventListener('click', () => {
    display.value += lastAnswer;
});
const parenthesesOpenButton = document.getElementById('parentheses-open') as HTMLButtonElement;
parenthesesOpenButton.addEventListener('click', () => {
    display.value += '(';
});
const parenthesesCloseButton = document.getElementById('parentheses-close') as HTMLButtonElement;
parenthesesCloseButton.addEventListener('click', () => {
    display.value += ')';
});
const signToggleButton = document.getElementById('sign-toggle') as HTMLButtonElement;
signToggleButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
});
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        display.value = result.toString();
        lastAnswer = result.toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});