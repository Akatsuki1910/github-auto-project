// ... (Existing code)
const lastAnswerButton = document.getElementById('last-answer') as HTMLButtonElement;
let lastAnswer = '';
equalsButton.addEventListener('click', () => {
    // ... (Existing equals button logic)
    lastAnswer = display.value;
});
lastAnswerButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += lastAnswer;
});