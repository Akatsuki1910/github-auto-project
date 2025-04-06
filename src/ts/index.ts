// ... (Existing code)
const inversePercentageButton = document.getElementById('inverse-percentage') as HTMLButtonElement;
inversePercentageButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const input = display.value;
    const number = Number(input);
    if (isNaN(number) || number === 0) {
        display.value = 'Error';
        return;
    }
    const result = 1 / (number / 100);
    display.value = result.toString();
});
//tan function
const tanButton = document.getElementById('tan') as HTMLButtonElement;
tanButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
  try {
    const inputValue = display.value;
    if (inputValue) {
        currentExpressionDisplay.textContent = `tan(${inputValue})`;
        const result = math.tan(Number(inputValue));
        display.value = result.toString();
      }
  } catch (error) {
    display.value = 'Error';
  }
});
// ... (Rest of the code)