// ... (Existing code)
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    if (display.value) {
        const num = parseFloat(display.value);
        display.value = Math.log(num).toString();
    }
});