// ... (Existing code)
const display = document.getElementById('display') as HTMLInputElement;
const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
// ... other functions
// Floor
// ... (Other functions)
// Cube Root
const cbrtButton = document.getElementById('cbrt') as HTMLButtonElement;
cbrtButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.cbrt(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `cbrt(${currentValue}) = ${result}`;
    }
});
//Clear Entry
const clearEntryButton = document.getElementById('clear-entry') as HTMLButtonElement;
clearEntryButton.addEventListener('click', () => {
    display.value = '';
});
//Ln
const lnButton = document.getElementById('ln') as HTMLButtonElement;
lnButton.addEventListener('click', () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue) && currentValue > 0) {  // Check for valid input
    const result = Math.log(currentValue);
    display.value = result.toString();
    currentExpressionDisplay.textContent = `ln(${currentValue}) = ${result}`;
  } else {
    display.value = "Error"; // Or handle the error as needed
    currentExpressionDisplay.textContent = "Invalid input for ln";
  }
});
// Basic Calculator Functions
// ... (rest of the code)