// ... (Existing code)
const negateButton = document.getElementById('negate') as HTMLButtonElement;
negateButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (-parseFloat(display.value)).toString();
    }
});