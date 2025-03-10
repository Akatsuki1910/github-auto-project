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
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-scheme');
    document.body.classList.toggle('light-scheme');
});