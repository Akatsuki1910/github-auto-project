// ... (Existing code)
const signToggleButton = document.getElementById('sign-toggle') as HTMLButtonElement;
signToggleButton.addEventListener('click', () => {
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
});