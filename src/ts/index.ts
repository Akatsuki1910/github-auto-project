// ... (Existing code)
const ceilButton = document.getElementById('ceil-button') as HTMLButtonElement;
ceilButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const ceilValue = Math.ceil(currentValue);
        display.value = ceilValue.toString();
    }
});
//...(rest of the code)