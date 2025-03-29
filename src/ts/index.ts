// ... (Existing code)
const expButton = document.getElementById('calculate-exp') as HTMLButtonElement;
expButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const expValue = Math.exp(currentValue);
        display.value = expValue.toString();
    }
});
//...(rest of the code)