// ... (Existing code)
const parenthesesButton = document.getElementById('parentheses') as HTMLButtonElement;
let parenthesesOpen = true;
parenthesesButton.addEventListener('click', () => {
    if (parenthesesOpen) {
        display.value += '(';
        parenthesesOpen = false;
    } else {
        display.value += ')';
        parenthesesOpen = true;
    }
});
const eButton = document.getElementById('e') as HTMLButtonElement;
eButton.addEventListener('click', () => {
    display.value = Math.E.toString();
});