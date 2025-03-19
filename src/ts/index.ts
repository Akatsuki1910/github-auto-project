// ... (Existing code)
const expm1Button = document.getElementById('expm1') as HTMLButtonElement;
expm1Button.addEventListener('click', () => {
    if (display.value) {
        display.value = Math.expm1(parseFloat(display.value)).toString();
    }
});