// ... (Existing code)
const sinButton = document.getElementById('sin') as HTMLButtonElement;
// ... (Other existing variables)
sinButton.addEventListener('click', () => {
    try {
      const currentValue = parseFloat(display.value);
      const result = Math.sin(currentValue);
      display.value = result.toString();
      currentExpression = result.toString();
      currentExpressionDisplay!.textContent = currentExpression;
    } catch (error) {
      display.value = 'Error';
    }
  });
// ... (Rest of the existing code)