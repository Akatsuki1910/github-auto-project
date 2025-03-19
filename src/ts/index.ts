// ... (Existing code)
const parenthesesOpenButton = document.getElementById('parentheses-open') as HTMLButtonElement;
parenthesesOpenButton.addEventListener('click', () => {
    display.value += '(';
});
const parenthesesCloseButton = document.getElementById('parentheses-close') as HTMLButtonElement;
parenthesesCloseButton.addEventListener('click', () => {
    display.value += ')';
});
const signToggleButton = document.getElementById('sign-toggle') as HTMLButtonElement;
signToggleButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
});