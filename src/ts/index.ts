// ... (Existing code)
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.tan(currentValue).toString();
    }
});
// ... (Rest of existing code)