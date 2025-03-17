// ... (Existing code)
const ceilButton = document.getElementById('ceil') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    if (display.value) {
        display.value = Math.ceil(parseFloat(display.value)).toString();
    }
});