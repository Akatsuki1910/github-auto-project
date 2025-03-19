// ... (Existing code)
const tanhButton = document.getElementById('tanh') as HTMLButtonElement;
tanhButton.addEventListener('click', () => {
    if (display.value) {
        display.value = Math.tanh(parseFloat(display.value)).toString();
    }
});