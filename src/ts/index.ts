// ... (Existing code)
const fourthRootButton = document.getElementById('fourthRoot') as HTMLButtonElement;
fourthRootButton.addEventListener('click', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const currentExpressionDisplay = document.getElementById('currentExpressionDisplay') as HTMLDivElement;
    try {
        const inputValue = display.value;
        if (inputValue) {
            const num = Number(inputValue);
            const result = math.nthRoot(num, 4);
            currentExpressionDisplay.textContent = `4√(${inputValue})`;
            display.value = result.toString();
        }
    }
    catch (error) {
        display.value = 'Error';
    }
});
// ... (Rest of the code)