// ... (Existing code)
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    try {
        const currentValue = parseFloat(display.value);
        display.value = Math.log(currentValue).toString();
    } catch (e) {
        display.value = "Invalid input";
    }
});
// ... (Rest of existing code)