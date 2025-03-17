// ... (Existing code)
const randButton = document.getElementById('rand') as HTMLButtonElement;
randButton.addEventListener('click', () => {
    display.value = Math.random().toString();
});
const duplicateButton = document.getElementById('duplicate') as HTMLButtonElement;
duplicateButton.addEventListener('click', () => {
    if (display.value) {
        display.value += display.value;
    }
});