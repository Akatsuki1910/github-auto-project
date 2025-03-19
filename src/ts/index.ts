// ... (Existing code)
const doubleButton = document.getElementById('double') as HTMLButtonElement;
doubleButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = (num * 2).toString();
    }
});
const tripleButton = document.getElementById('triple') as HTMLButtonElement;
tripleButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = (num * 3).toString();
    }
});
const signToggleButton = document.getElementById('sign-toggle') as HTMLButtonElement;
signToggleButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = (-num).toString();
    }
});