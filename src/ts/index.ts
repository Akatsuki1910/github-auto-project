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
// ... (Rest of the code)