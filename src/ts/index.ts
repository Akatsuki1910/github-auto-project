// ... (Existing code)
const logButton = document.getElementById('calculate-log') as HTMLButtonElement;
logButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const logValue = Math.log10(currentValue);
        display.value = logValue.toString();
    }
});
//...(rest of the code)