// ... (Existing code)
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