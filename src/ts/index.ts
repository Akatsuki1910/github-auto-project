// ... (Existing code)
const openParenthesisButton = document.getElementById('open-parenthesis') as HTMLButtonElement;
openParenthesisButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += '(';
});
const closeParenthesisButton = document.getElementById('close-parenthesis') as HTMLButtonElement;
closeParenthesisButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += ')';
});
// ... (Rest of the code)