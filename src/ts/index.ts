// ... (Existing code)
const powerOfTenButton = document.getElementById('power-of-ten') as HTMLButtonElement;
powerOfTenButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = Math.pow(10, currentValue).toString();
    }
});
const calculateExpressionButton = document.getElementById('calculate-expression') as HTMLButtonElement;
calculateExpressionButton.addEventListener('click', () => {
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const result = math.evaluate(currentExpressionDisplay.textContent);
        display.value = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
});
const clearExpressionButton = document.getElementById('clear-expression') as HTMLButtonElement;
clearExpressionButton.addEventListener('click', () => {
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    currentExpressionDisplay.textContent = '';
});
const oneOverXButton = document.getElementById('one-over-x') as HTMLButtonElement;
oneOverXButton?.addEventListener('click', () => {
    const number = parseFloat(display.value);
    if (isNaN(number) || number === 0) {
        display.value = 'Invalid input';
        return;
    }
    display.value = (1 / number).toString();
});
const percentageOfButton = document.getElementById('percentage-of') as HTMLButtonElement;
percentageOfButton.addEventListener('click', () => {
  const [percentage, total] = display.value.split(',').map(Number);
  if (isNaN(percentage) || isNaN(total)) {
    display.value = 'Invalid Input';
    return;
  }
  display.value = ((percentage / 100) * total).toString();
});
//...(rest of the code)