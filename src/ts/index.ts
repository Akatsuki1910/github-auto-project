// ... (Existing code)
const openParenButton = document.getElementById('open-paren') as HTMLButtonElement;
openParenButton.addEventListener('click', () => {
    display.value += '(';
});
const closeParenButton = document.getElementById('close-paren') as HTMLButtonElement;
closeParenButton.addEventListener('click', () => {
    display.value += ')';
});