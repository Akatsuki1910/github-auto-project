// ... (Existing code)
const decimalToBinaryButton = document.getElementById('decimal-to-binary') as HTMLButtonElement;
decimalToBinaryButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number)) {
        display.value = 'Invalid input';
        return;
    }
    display.value = Math.floor(number).toString(2);
});
//...(rest of the code)