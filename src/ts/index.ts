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
// ... (Rest of the code)