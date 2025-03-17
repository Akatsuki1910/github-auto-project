// ... (Existing code)
const modButton = document.getElementById('mod') as HTMLButtonElement;
modButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});