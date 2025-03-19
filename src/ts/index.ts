// ... (Existing code)
const squareButton = document.getElementById('square') as HTMLButtonElement;
squareButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = (num * num).toString();
    }
});