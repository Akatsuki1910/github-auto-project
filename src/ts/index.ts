// ... (Existing code)
const percentButton = document.getElementById('percent') as HTMLButtonElement;
percentButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = (currentValue / 100).toString();
    }
});