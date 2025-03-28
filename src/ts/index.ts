// ... (Existing code)
const cubeButton = document.getElementById('cube') as HTMLButtonElement;
cubeButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid Input';
        return;
    }
    const cubeValue = currentValue * currentValue * currentValue;
    display.value = cubeValue.toString();
});
const squareRootDisplayButton = document.getElementById('square-root-display');
squareRootDisplayButton?.addEventListener('click', () => {
    const currentValue = parseFloat(display.value);
    if (isNaN(currentValue)) {
        display.value = 'Invalid Input';
        return;
    }
    if (currentValue < 0) {
        display.value = 'Invalid Input (Negative Number)';
        return;
    }
    const squareRootValue = Math.sqrt(currentValue);
    display.value = squareRootValue.toString();
});
//...(rest of the code)