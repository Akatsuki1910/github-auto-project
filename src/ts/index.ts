// ... (Existing code)
const doubleButton = document.getElementById('double') as HTMLButtonElement;
doubleButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = (num * 2).toString();
    }
});