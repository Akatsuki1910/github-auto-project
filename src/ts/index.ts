// ... (Existing code)
//Added Feature: Degree/Radian Toggle
let isDegreeMode = true;
const degRadButton = document.getElementById('deg-rad') as HTMLButtonElement;
degRadButton.addEventListener('click', () => {
    isDegreeMode = !isDegreeMode;
    degRadButton.textContent = isDegreeMode ? 'Deg' : 'Rad';
});
const tanhButton = document.getElementById('tanh') as HTMLButtonElement;
tanhButton.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        const result = Math.tanh(currentValue);
        display.value = result.toString();
        currentExpressionDisplay.textContent = `tanh(${currentValue}) = ${result}`;
    }
});