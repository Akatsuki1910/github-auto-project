// ... (Existing code)
const sinButton = document.getElementById('sin') as HTMLButtonElement;
sinButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.sin(currentValue).toString();
    }
});
// ... (Rest of existing code)