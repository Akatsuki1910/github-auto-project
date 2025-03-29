// ... (Existing code)
const lnButton = document.getElementById('calculate-ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const lnValue = Math.log(currentValue);
        display.value = lnValue.toString();
    }
});
//...(rest of the code)