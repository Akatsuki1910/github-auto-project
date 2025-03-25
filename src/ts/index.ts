// ... (Existing code)
const lnButton = document.getElementById('ln');
if (lnButton) {
    lnButton.addEventListener('click', () => {
        const display = document.getElementById('display') as HTMLInputElement;
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue > 0) {
            display.value = Math.log(currentValue).toString();
        }
    });
}
// ... (Existing code)