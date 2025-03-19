// ... (Existing code)
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    if (display.value) {
        const currentValue = parseFloat(display.value);
        display.value = Math.log(currentValue).toString();
    }
});