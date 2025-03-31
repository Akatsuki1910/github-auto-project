// ... (Existing code)
const openParenthesisButton = document.getElementById('parentheses-open') as HTMLButtonElement;
openParenthesisButton.addEventListener('click', () => {
    display.value += '(';
});
const closeParenthesisButton = document.getElementById('parentheses-close') as HTMLButtonElement;
closeParenthesisButton.addEventListener('click', () => {
    display.value += ')';
});
// ... (Rest of the code)