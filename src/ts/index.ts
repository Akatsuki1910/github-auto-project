// ... (Existing code)
const signButton = document.getElementById('sign') as HTMLButtonElement;
signButton.addEventListener('click', () => {
    if (display.value) {
        display.value = Math.sign(parseFloat(display.value)).toString();
    }
});