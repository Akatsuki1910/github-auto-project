// ... (Existing code)
const modButton = document.getElementById('mod');
modButton?.addEventListener('click', () => {
    const input = display.value;
    currentOperator = '%';
    firstOperand = parseFloat(input);
    display.value = '';
});

//In equals button logic
if (currentOperator === '%') {
    display.value = (firstOperand % parseFloat(display.value)).toString();
}
// ... (Rest of existing code)