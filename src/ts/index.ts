// ... (Existing code)
const signChangeButton = document.getElementById('sign-change') as HTMLButtonElement;
signChangeButton.addEventListener('click', () => {
    if (display.value) {
        const currentValue = parseFloat(display.value);
        display.value = (-currentValue).toString();
    }
});