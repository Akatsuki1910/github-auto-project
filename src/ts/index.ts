// ... (Existing code)
const ansButton = document.getElementById('ans') as HTMLButtonElement;
let lastAnswer = 0;
ansButton.addEventListener('click', () => {
    display.value += lastAnswer.toString();
});
const equalsButton = document.getElementById('equals') as HTMLButtonElement;
equalsButton.addEventListener('click', () => {
    try {
        const result = eval(display.value);
        lastAnswer = result;
        display.value = result.toString();
    }
    catch (error) {
        display.value = 'Error';
    }
});
const parenthesisOpenButton = document.getElementById('parenthesis-open') as HTMLButtonElement;
parenthesisOpenButton.addEventListener('click', () => {
    display.value += '(';
});
const parenthesisCloseButton = document.getElementById('parenthesis-close') as HTMLButtonElement;
parenthesisCloseButton.addEventListener('click', () => {
    display.value += ')';
});
let memoryValue = 0;
const memoryStoreButton = document.getElementById('memory-store') as HTMLButtonElement;
memoryStoreButton.addEventListener('click', () => {
    try {
        memoryValue = parseFloat(display.value);
    }
    catch (error) {
        console.error("Invalid input for memory store");
    }
});
const memoryRecallButton = document.getElementById('memory-recall') as HTMLButtonElement;
memoryRecallButton.addEventListener('click', () => {
    display.value += memoryValue.toString();
});
const memoryClearButton = document.getElementById('memory-clear') as HTMLButtonElement;
memoryClearButton.addEventListener('click', () => {
    memoryValue = 0;
});