// ... (Existing code)
const expButton = document.getElementById('exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = Math.exp(num).toString();
    }
});